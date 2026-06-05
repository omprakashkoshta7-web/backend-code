import { FunctionSignature } from './functionSignatures';

const typeMap: Record<string, { js: string; py: string; java: string; cpp: string; c: string }> = {
  'int[]':       { js: 'number[]', py: 'List[int]', java: 'int[]', cpp: 'vector<int>&', c: 'int*' },
  'int[][]':     { js: 'number[][]', py: 'List[List[int]]', java: 'int[][]', cpp: 'vector<vector<int>>&', c: 'int**' },
  'char[]':      { js: 'string[]', py: 'List[str]', java: 'char[]', cpp: 'vector<char>&', c: 'char*' },
  'char[][]':    { js: 'string[][]', py: 'List[List[str]]', java: 'char[][]', cpp: 'vector<vector<char>>&', c: 'char**' },
  'string':      { js: 'string', py: 'str', java: 'String', cpp: 'string', c: 'char*' },
  'string[]':    { js: 'string[]', py: 'List[str]', java: 'String[]', cpp: 'vector<string>&', c: 'char**' },
  'string[][]':  { js: 'string[][]', py: 'List[List[str]]', java: 'String[][]', cpp: 'vector<vector<string>>&', c: 'char***' },
  'int':         { js: 'number', py: 'int', java: 'int', cpp: 'int', c: 'int' },
  'boolean':     { js: 'boolean', py: 'bool', java: 'boolean', cpp: 'bool', c: 'int' },
  'double':      { js: 'number', py: 'float', java: 'double', cpp: 'double', c: 'double' },
  'void':        { js: 'void', py: 'None', java: 'void', cpp: 'void', c: 'void' },
  'ListNode':    { js: 'ListNode | null', py: 'Optional[ListNode]', java: 'ListNode', cpp: 'ListNode*', c: 'struct ListNode*' },
  'ListNode[]':  { js: '(ListNode | null)[]', py: 'List[Optional[ListNode]]', java: 'ListNode[]', cpp: 'vector<ListNode*>', c: 'struct ListNode**' },
  'TreeNode':    { js: 'TreeNode | null', py: 'Optional[TreeNode]', java: 'TreeNode', cpp: 'TreeNode*', c: 'struct TreeNode*' },
  'Node':        { js: 'Node | null', py: 'Optional[Node]', java: 'Node', cpp: 'Node*', c: 'struct Node*' },
};

function t(lang: string, type: string): string {
  return typeMap[type]?.[lang as keyof (typeof typeMap)[string]] || type;
}

function paramTypes(lang: string, params: { name: string; type: string }[]): string {
  return params.map(p => {
    if (lang === 'js') return `${p.name}: ${t('js', p.type)}`;
    if (lang === 'py') return `${p.name}: ${t('py', p.type)}`;
    return '';
  }).join(', ');
}

function paramNames(params: { name: string; type: string }[]): string {
  return params.map(p => `${p.name}`).join(', ');
}

function javaParams(params: { name: string; type: string }[]): string {
  return params.map(p => `${t('java', p.type)} ${p.name}`).join(', ');
}

function cppParams(params: { name: string; type: string }[]): string {
  return params.map(p => `${t('cpp', p.type)} ${p.name}`).join(', ');
}

function cParams(params: { name: string; type: string }[]): string {
  return params.map(p => {
    const ct = t('c', p.type);
    const needsSize = p.type === 'int[]' || p.type === 'char[]';
    const paramDecl = `${ct} ${p.name}`;
    if (needsSize) {
      return `${paramDecl}, int ${p.name}Size`;
    }
    if (p.type === 'int[][]' || p.type === 'char[][]') {
      return `${paramDecl}, int ${p.name}Size, int* ${p.name}ColSize`;
    }
    return paramDecl;
  }).join(', ');
}

export function generateStarterCode(sig: FunctionSignature): Record<string, string> {
  const { fnName, params, returnType } = sig;
  const jsRet = t('js', returnType);
  const pyRet = t('py', returnType);

  const isClassDesign = ['LFUCache', 'AllOne', 'MinStack', 'MyQueue', 'MyStack', 'RecentCounter',
    'MyCircularQueue', 'HitCounter', 'KthLargest', 'MedianFinder', 'BSTIterator', 'Codec']
    .includes(fnName);

  const isVoid = returnType === 'void';

  return {
    javascript: `function ${fnName}(${paramTypes('js', params)}): ${jsRet} {
  ${isVoid ? '' : '  return'};
}`,
    python: `def ${fnName}(${params.map(p => p.name).join(', ')}):
    pass`,
    java: isClassDesign
      ? `class ${fnName} {\n    public ${fnName}(${javaParams(params)}) {\n        \n    }\n}`
      : `class Solution {\n    public ${t('java', returnType)} ${fnName}(${javaParams(params)}) {\n        \n    }\n}`,
    cpp: isClassDesign
      ? `class ${fnName} {\npublic:\n    ${fnName}(${cppParams(params)}) {\n        \n    }\n};`
      : `class Solution {\npublic:\n    ${t('cpp', returnType)} ${fnName}(${cppParams(params)}) {\n        \n    }\n};`,
    c: `${t('c', returnType)} ${fnName}(${cParams(params)}) {\n    \n}`,
  };
}
