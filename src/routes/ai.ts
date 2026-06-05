import { Router, Request, Response } from 'express';
import { getDb, addQuestion, updateQuestion, deleteQuestion, addTestCase, deleteTestCase, getTestCases } from '../data/db';
import { topics, cheatSheets } from '../data/seed';
import type { Question } from '../types';

const router = Router();

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '';
const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';

const SYSTEM_PROMPT = `You are an admin AI assistant for a DSA (Data Structures & Algorithms) coding platform. You can help manage questions, examples, constraints, and test cases.

You have access to these tools:

1. list_questions - List all questions (returns id, title, slug, difficulty, topic_name)
2. get_question - Get full details of a question by slug
3. add_question - Add a new question. Parameters: title, difficulty, topic_name, description, pattern, problem_statement, constraints, examples (array of {input, output, explanation}), visualization_type, sample_input
4. update_question - Update a question by slug. Parameters: slug, and any fields to update
5. delete_question - Delete a question by slug
6. add_examples - Add examples to a question. Parameters: slug, examples (array of {input, output, explanation})
7. add_testcases - Add test cases to a question. Parameters: slug, test_cases (array of {input, expected_output, is_hidden})
8. get_testcases - Get test cases for a question by slug

When the user asks to add a question, use add_question tool.
When the user asks to edit/update a question, use update_question tool.
When the user asks to delete a question, use delete_question tool.
When the user asks to add examples, use add_examples tool.
When the user asks to add test cases, use add_testcases tool.
When the user asks to list questions, use list_questions tool.
When the user asks about a specific question, use get_question tool.

Always confirm what you did after executing a tool. Be concise and helpful.
If a question slug doesn't exist, tell the user.

Available topics: Arrays, Strings, Hashing, Linked List, Stack, Queue, Heap, Trees, BST, Graphs
Available difficulty levels: Easy, Medium, Hard
Available visualization types: array, hashmap, linkedlist, tree, graph, stack, queue, heap, binarysearch, slidingwindow, dp, none`;

const TOOLS = [
  {
    type: 'function' as const,
    function: {
      name: 'list_questions',
      description: 'List all questions with their basic info',
      parameters: { type: 'object' as const, properties: {}, required: [] },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: 'get_question',
      description: 'Get full details of a question by slug',
      parameters: {
        type: 'object' as const,
        properties: { slug: { type: 'string', description: 'The question slug' } },
        required: ['slug'],
      },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: 'add_question',
      description: 'Add a new question',
      parameters: {
        type: 'object' as const,
        properties: {
          title: { type: 'string', description: 'Question title' },
          difficulty: { type: 'string', enum: ['Easy', 'Medium', 'Hard'], description: 'Difficulty level' },
          topic_name: { type: 'string', description: 'Topic name (Arrays, Strings, Hashing, etc.)' },
          description: { type: 'string', description: 'Short description' },
          pattern: { type: 'string', description: 'Pattern name (HashMap Lookup, Two Pointers, etc.)' },
          problem_statement: { type: 'string', description: 'Full problem statement' },
          constraints: { type: 'string', description: 'Constraints text' },
          examples: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                input: { type: 'string' },
                output: { type: 'string' },
                explanation: { type: 'string' },
              },
            },
            description: 'Array of examples',
          },
          visualization_type: { type: 'string', description: 'Visualization type' },
          sample_input: { type: 'string', description: 'Sample input for visualization' },
        },
        required: ['title', 'difficulty', 'topic_name'],
      },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: 'update_question',
      description: 'Update an existing question by slug',
      parameters: {
        type: 'object' as const,
        properties: {
          slug: { type: 'string', description: 'The question slug to update' },
          title: { type: 'string' },
          difficulty: { type: 'string' },
          topic_name: { type: 'string' },
          description: { type: 'string' },
          pattern: { type: 'string' },
          problem_statement: { type: 'string' },
          constraints: { type: 'string' },
          examples: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                input: { type: 'string' },
                output: { type: 'string' },
                explanation: { type: 'string' },
              },
            },
          },
          visualization_type: { type: 'string' },
          sample_input: { type: 'string' },
        },
        required: ['slug'],
      },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: 'delete_question',
      description: 'Delete a question by slug',
      parameters: {
        type: 'object' as const,
        properties: { slug: { type: 'string', description: 'The question slug to delete' } },
        required: ['slug'],
      },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: 'add_examples',
      description: 'Add examples to an existing question',
      parameters: {
        type: 'object' as const,
        properties: {
          slug: { type: 'string', description: 'Question slug' },
          examples: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                input: { type: 'string' },
                output: { type: 'string' },
                explanation: { type: 'string' },
              },
            },
            description: 'Examples to add',
          },
        },
        required: ['slug', 'examples'],
      },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: 'add_testcases',
      description: 'Add test cases to a question',
      parameters: {
        type: 'object' as const,
        properties: {
          slug: { type: 'string', description: 'Question slug' },
          test_cases: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                input: { type: 'string' },
                expected_output: { type: 'string' },
                is_hidden: { type: 'boolean' },
              },
            },
            description: 'Test cases to add',
          },
        },
        required: ['slug', 'test_cases'],
      },
    },
  },
  {
    type: 'function' as const,
    function: {
      name: 'get_testcases',
      description: 'Get test cases for a question',
      parameters: {
        type: 'object' as const,
        properties: { slug: { type: 'string', description: 'Question slug' } },
        required: ['slug'],
      },
    },
  },
];

function executeTool(name: string, args: any): any {
  const db = getDb();

  switch (name) {
    case 'list_questions': {
      return db.questions.map(q => ({
        id: q.id, title: q.title, slug: q.slug, difficulty: q.difficulty,
        topic_name: q.topic_name, visualization_type: q.visualization_type,
      }));
    }

    case 'get_question': {
      const q = db.questions.find(q => q.slug === args.slug);
      if (!q) return { error: `Question '${args.slug}' not found` };
      const cs = cheatSheets.find(c => c.question_id === q.slug);
      const testCases = getTestCases(q.slug);
      return { ...q, cheat_sheet: cs || null, test_cases: testCases };
    }

    case 'add_question': {
      const existing = db.questions.find(q => q.slug === args.title.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-'));
      if (existing) return { error: `Question '${args.title}' already exists` };

      const slug = args.title.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
      const topic = topics.find(t => t.name.toLowerCase() === (args.topic_name || '').toLowerCase());
      const newQ: Question = {
        id: String(db.questions.length + 1),
        title: args.title,
        slug,
        difficulty: args.difficulty || 'Easy',
        topic_id: topic?.id || '1',
        topic_name: args.topic_name || topic?.name || 'Arrays',
        pattern: args.pattern || '',
        description: args.description || '',
        problem_statement: args.problem_statement || '',
        constraints: args.constraints || '',
        visualization_type: args.visualization_type || 'array',
        sample_input: args.sample_input || '',
        examples: args.examples || [],
      };
      addQuestion(newQ);

      // Add examples if provided
      if (args.examples && args.examples.length > 0) {
        updateQuestion(slug, { examples: args.examples });
      }

      return { success: true, question: newQ };
    }

    case 'update_question': {
      const { slug, ...updates } = args;
      const q = db.questions.find(q => q.slug === slug);
      if (!q) return { error: `Question '${slug}' not found` };
      const updated = updateQuestion(slug, updates);
      return { success: true, question: updated };
    }

    case 'delete_question': {
      const q = db.questions.find(q => q.slug === args.slug);
      if (!q) return { error: `Question '${args.slug}' not found` };
      deleteQuestion(args.slug);
      return { success: true, message: `Deleted question '${args.slug}'` };
    }

    case 'add_examples': {
      const q = db.questions.find(q => q.slug === args.slug);
      if (!q) return { error: `Question '${args.slug}' not found` };
      const existing = q.examples || [];
      const updated = updateQuestion(args.slug, { examples: [...existing, ...args.examples] });
      return { success: true, examples: updated?.examples };
    }

    case 'add_testcases': {
      const q = db.questions.find(q => q.slug === args.slug);
      if (!q) return { error: `Question '${args.slug}' not found` };
      args.test_cases.forEach((tc: any, i: number) => {
        addTestCase({
          id: String(Date.now() + i),
          slug: args.slug,
          input: tc.input,
          expected_output: tc.expected_output,
          is_hidden: tc.is_hidden || false,
        });
      });
      return { success: true, message: `Added ${args.test_cases.length} test cases to '${args.slug}'` };
    }

    case 'get_testcases': {
      const q = db.questions.find(q => q.slug === args.slug);
      if (!q) return { error: `Question '${args.slug}' not found` };
      return getTestCases(args.slug);
    }

    default:
      return { error: `Unknown tool: ${name}` };
  }
}

router.post('/ai-chat', async (req: Request, res: Response) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'messages array required' });
    }

    const apiMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages,
    ];

    // Call OpenRouter API
    const response = await fetch(OPENROUTER_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'http://localhost:5174',
        'X-Title': 'DSA Admin AI',
      },
      body: JSON.stringify({
        model: 'google/gemma-4-31b-it:free',
        messages: apiMessages,
        tools: TOOLS,
        tool_choice: 'auto',
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('[AI] OpenRouter error:', err);
      if (response.status === 429) {
        return res.status(429).json({
          error: 'AI service is temporarily rate-limited. Please wait a moment and try again, or configure your own API key in backend/src/routes/ai.ts.',
        });
      }
      return res.status(502).json({ error: 'AI service unavailable', details: err });
    }

    const data: any = await response.json();
    const assistantMessage = data.choices?.[0]?.message;

    if (!assistantMessage) {
      return res.status(500).json({ error: 'No response from AI' });
    }

    // Process tool calls
    if (assistantMessage.tool_calls && assistantMessage.tool_calls.length > 0) {
      const toolResults = [];
      for (const toolCall of assistantMessage.tool_calls) {
        const fnName = toolCall.function.name;
        let fnArgs;
        try {
          fnArgs = typeof toolCall.function.arguments === 'string'
            ? JSON.parse(toolCall.function.arguments)
            : toolCall.function.arguments;
        } catch {
          fnArgs = {};
        }

        console.log(`[AI] Executing tool: ${fnName}`, JSON.stringify(fnArgs).slice(0, 200));
        const result = executeTool(fnName, fnArgs);
        toolResults.push({ tool_call_id: toolCall.id, role: 'tool', content: JSON.stringify(result) });
      }

      // Send tool results back to AI for final response
      const followUpResponse = await fetch(OPENROUTER_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost:5174',
          'X-Title': 'DSA Admin AI',
        },
        body: JSON.stringify({
          model: 'google/gemma-4-31b-it:free',
          messages: [
            ...apiMessages,
            assistantMessage,
            ...toolResults,
          ],
          max_tokens: 500,
        }),
      });

      if (!followUpResponse.ok) {
        const err = await followUpResponse.text();
        console.error('[AI] Follow-up OpenRouter error:', err);
        if (followUpResponse.status === 429) {
          return res.status(429).json({
            error: 'AI service is temporarily rate-limited. Please wait a moment and try again.',
          });
        }
        return res.status(502).json({ error: 'AI service unavailable', details: err });
      }

      const followUpData: any = await followUpResponse.json();
      const finalMessage = followUpData.choices?.[0]?.message;

      return res.json({
        role: 'assistant',
        content: finalMessage?.content || 'Action completed.',
        tool_results: toolResults.map(tr => JSON.parse(tr.content)),
      });
    }

    // No tool calls - just a regular response
    return res.json({
      role: 'assistant',
      content: assistantMessage.content,
    });
  } catch (err: any) {
    console.error('[AI] Error:', err);
    return res.status(500).json({ error: err.message || 'Internal server error' });
  }
});

export default router;
