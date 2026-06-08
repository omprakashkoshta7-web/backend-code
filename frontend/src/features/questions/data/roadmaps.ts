export interface RoadmapStep {
  order: number;
  title: string;
  description: string;
  resources: { label: string; href: string }[];
}

export interface Roadmap {
  id: string;
  title: string;
  icon: string;
  color: string;
  description: string;
  steps: RoadmapStep[];
}

const ROADMAPS: Roadmap[] = [
  {
    id: 'python',
    title: 'Python Developer',
    icon: 'Py',
    color: 'from-blue-500 to-cyan-500',
    description: 'Master Python from basics to advanced. Build web apps, automation, and data science projects.',
    steps: [
      { order: 1, title: 'Python Basics', description: 'Variables, data types, conditionals, loops, functions', resources: [{ label: 'Python Official Tutorial', href: 'https://docs.python.org/3/tutorial/' }] },
      { order: 2, title: 'Data Structures & Algorithms', description: 'Lists, dicts, sets, tuples, stacks, queues, trees, graphs', resources: [{ label: 'LeetCode Python Solutions', href: 'https://leetcode.com/' }] },
      { order: 3, title: 'OOP & Modules', description: 'Classes, inheritance, polymorphism, modules, packages', resources: [{ label: 'Real Python OOP', href: 'https://realpython.com/python3-object-oriented-programming/' }] },
      { order: 4, title: 'File I/O & Error Handling', description: 'Reading/writing files, try/except, logging', resources: [{ label: 'Python Errors & Exceptions', href: 'https://docs.python.org/3/tutorial/errors.html' }] },
      { order: 5, title: 'APIs & Web Frameworks', description: 'Flask, FastAPI, REST APIs, request handling', resources: [{ label: 'FastAPI Docs', href: 'https://fastapi.tiangolo.com/' }] },
      { order: 6, title: 'Databases & ORMs', description: 'SQLite, PostgreSQL, SQLAlchemy, Alembic', resources: [{ label: 'SQLAlchemy Docs', href: 'https://docs.sqlalchemy.org/' }] },
      { order: 7, title: 'Testing & Debugging', description: 'unittest, pytest, debugging techniques', resources: [{ label: 'pytest Docs', href: 'https://docs.pytest.org/' }] },
      { order: 8, title: 'Deployment & DevOps', description: 'Docker, CI/CD, cloud deployment (AWS/Heroku)', resources: [{ label: 'Docker Python Guide', href: 'https://docs.docker.com/language/python/' }] },
    ],
  },
  {
    id: 'javascript',
    title: 'JavaScript / Frontend Developer',
    icon: 'JS',
    color: 'from-yellow-400 to-orange-500',
    description: 'Become a full-stack JavaScript developer. Learn the language, frameworks, and ecosystem.',
    steps: [
      { order: 1, title: 'JavaScript Fundamentals', description: 'Variables, scopes, closures, promises, async/await', resources: [{ label: 'MDN JavaScript Guide', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' }] },
      { order: 2, title: 'DOM Manipulation', description: 'Selectors, events, styling, form handling', resources: [{ label: 'DOM Introduction', href: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction' }] },
      { order: 3, title: 'ES6+ Features', description: 'Arrow functions, destructuring, spread, modules, classes', resources: [{ label: 'ES6 Features', href: 'https://www.javascripttutorial.net/es6/' }] },
      { order: 4, title: 'Package Managers & Build Tools', description: 'npm, yarn, Webpack, Vite, Babel', resources: [{ label: 'Vite Guide', href: 'https://vitejs.dev/guide/' }] },
      { order: 5, title: 'React / Next.js', description: 'Components, hooks, state management, routing, SSR', resources: [{ label: 'React Docs', href: 'https://react.dev/' }] },
      { order: 6, title: 'State Management', description: 'Redux, Zustand, Context API, React Query', resources: [{ label: 'Redux Toolkit', href: 'https://redux-toolkit.js.org/' }] },
      { order: 7, title: 'TypeScript', description: 'Types, interfaces, generics, enums, advanced types', resources: [{ label: 'TypeScript Handbook', href: 'https://www.typescriptlang.org/docs/handbook/' }] },
      { order: 8, title: 'Testing & Deployment', description: 'Jest, React Testing Library, CI/CD, Vercel/Netlify', resources: [{ label: 'Testing Library', href: 'https://testing-library.com/' }] },
    ],
  },
  {
    id: 'dsa',
    title: 'DSA & Competitive Programming',
    icon: 'Ab',
    color: 'from-purple-500 to-violet-600',
    description: 'Master data structures and algorithms. Ace coding interviews and competitions.',
    steps: [
      { order: 1, title: 'Arrays & Strings', description: 'Two pointers, sliding window, prefix sum, rotations', resources: [{ label: 'Array Patterns', href: '/patterns' }] },
      { order: 2, title: 'Hashing & HashMaps', description: 'HashMap, HashSet, frequency counting, lookups', resources: [{ label: 'HashMap Patterns', href: '/patterns' }] },
      { order: 3, title: 'Linked Lists', description: 'Singly/doubly, fast & slow pointer, reversal, merge', resources: [{ label: 'Linked List Patterns', href: '/patterns' }] },
      { order: 4, title: 'Stacks & Queues', description: 'Monotonic stack, deque, BFS, priority queues', resources: [{ label: 'Stack/Queue Patterns', href: '/patterns' }] },
      { order: 5, title: 'Trees & Graphs', description: 'DFS, BFS, binary trees, BST, graph traversals, shortest path', resources: [{ label: 'Tree Patterns', href: '/patterns' }] },
      { order: 6, title: 'Dynamic Programming', description: 'Memoization, tabulation, LCS, knapSack, DP on trees', resources: [{ label: 'DP Patterns', href: '/patterns' }] },
      { order: 7, title: 'Greedy & Backtracking', description: 'Interval problems, permutations, combinations, N-Queens', resources: [{ label: 'Greedy Patterns', href: '/patterns' }] },
      { order: 8, title: 'Advanced Topics', description: 'Trie, Union-Find, Segment Tree, BIT, Topological Sort', resources: [{ label: 'Advanced DSA', href: '/topics' }] },
    ],
  },
  {
    id: 'system-design',
    title: 'System Design',
    icon: 'SD',
    color: 'from-emerald-500 to-teal-500',
    description: 'Learn to design scalable systems. Prepare for senior-level system design interviews.',
    steps: [
      { order: 1, title: 'Fundamentals', description: 'Client-server, APIs, HTTP, REST, load balancing, caching', resources: [{ label: 'System Design Primer', href: 'https://github.com/donnemartin/system-design-primer' }] },
      { order: 2, title: 'Databases & Storage', description: 'SQL vs NoSQL, indexing, sharding, replication, CAP theorem', resources: [{ label: 'Database Design', href: 'https://www.freecodecamp.org/news/database-design-fundamentals/' }] },
      { order: 3, title: 'Distributed Systems', description: 'Consistency, consensus, distributed transactions, RPC', resources: [{ label: 'Distributed Systems MIT', href: 'https://pdos.csail.mit.edu/6.824/' }] },
      { order: 4, title: 'Message Queues & Streaming', description: 'Kafka, RabbitMQ, pub/sub, event-driven architecture', resources: [{ label: 'Kafka Introduction', href: 'https://kafka.apache.org/intro' }] },
      { order: 5, title: 'Microservices Architecture', description: 'Service decomposition, API gateway, service mesh, containerization', resources: [{ label: 'Microservices Guide', href: 'https://microservices.io/' }] },
      { order: 6, title: 'Design Problems', description: 'Design URL shortener, WhatsApp, Netflix, Uber, Twitter', resources: [{ label: 'System Design Interview', href: 'https://github.com/checkcheckzz/system-design-interview' }] },
      { order: 7, title: 'Performance & Monitoring', description: 'Latency, throughput, observability, metrics, tracing, logging', resources: [{ label: 'Google SRE Book', href: 'https://sre.google/sre-book/table-of-contents/' }] },
    ],
  },
  {
    id: 'java',
    title: 'Java Developer',
    icon: 'JV',
    color: 'from-red-500 to-orange-500',
    description: 'Build enterprise-grade applications with Java. Master Spring Boot and backend development.',
    steps: [
      { order: 1, title: 'Java Core', description: 'OOP, collections, generics, streams, lambdas', resources: [{ label: 'Java Tutorials', href: 'https://docs.oracle.com/javase/tutorial/' }] },
      { order: 2, title: 'Multithreading & Concurrency', description: 'Threads, executors, synchronized, locks, CompletableFuture', resources: [{ label: 'Java Concurrency', href: 'https://docs.oracle.com/javase/tutorial/essential/concurrency/' }] },
      { order: 3, title: 'Spring Boot Basics', description: 'Dependency injection, REST controllers, JPA, security', resources: [{ label: 'Spring Boot Guide', href: 'https://spring.io/guides' }] },
      { order: 4, title: 'Database & JPA', description: 'Hibernate, JPA, repositories, migrations (Flyway)', resources: [{ label: 'JPA Tutorial', href: 'https://www.baeldung.com/jpa-hibernate' }] },
      { order: 5, title: 'Testing', description: 'JUnit, Mockito, integration tests, test containers', resources: [{ label: 'Mockito Docs', href: 'https://site.mockito.org/' }] },
      { order: 6, title: 'Build Tools & CI/CD', description: 'Maven, Gradle, Jenkins, GitHub Actions', resources: [{ label: 'Maven Guide', href: 'https://maven.apache.org/guides/' }] },
      { order: 7, title: 'Cloud & Deployment', description: 'Docker, Kubernetes, AWS, Spring Cloud', resources: [{ label: 'Spring Cloud', href: 'https://spring.io/projects/spring-cloud' }] },
    ],
  },
  {
    id: 'react',
    title: 'React Developer',
    icon: 'Rx',
    color: 'from-cyan-500 to-blue-500',
    description: 'Modern React development with hooks, state management, and full-stack capabilities.',
    steps: [
      { order: 1, title: 'React Fundamentals', description: 'JSX, components, props, state, lifecycle', resources: [{ label: 'React Docs', href: 'https://react.dev/' }] },
      { order: 2, title: 'Hooks Deep Dive', description: 'useState, useEffect, useRef, useMemo, custom hooks', resources: [{ label: 'React Hooks Reference', href: 'https://react.dev/reference/react' }] },
      { order: 3, title: 'State Management', description: 'Context API, useReducer, Zustand, Redux Toolkit', resources: [{ label: 'Zustand', href: 'https://github.com/pmndrs/zustand' }] },
      { order: 4, title: 'Routing & Data Fetching', description: 'React Router, TanStack Query, SWR, Axios', resources: [{ label: 'React Router', href: 'https://reactrouter.com/' }] },
      { order: 5, title: 'Styling & UI', description: 'Tailwind CSS, styled-components, Framer Motion, shadcn/ui', resources: [{ label: 'Tailwind CSS', href: 'https://tailwindcss.com/' }] },
      { order: 6, title: 'Next.js / Full-Stack', description: 'SSR, SSG, API routes, middleware, App Router', resources: [{ label: 'Next.js Docs', href: 'https://nextjs.org/docs' }] },
      { order: 7, title: 'Testing & Quality', description: 'Jest, React Testing Library, Vitest, E2E (Playwright)', resources: [{ label: 'Testing Library', href: 'https://testing-library.com/docs/react-testing-library/intro/' }] },
      { order: 8, title: 'Performance & Optimization', description: 'Code splitting, lazy loading, memoization, bundle analysis', resources: [{ label: 'React Performance', href: 'https://react.dev/reference/react/memo' }] },
    ],
  },
  {
    id: 'ml-ai',
    title: 'Machine Learning & AI',
    icon: 'ML',
    color: 'from-pink-500 to-rose-500',
    description: 'Learn ML/AI from basics to deep learning. Build models, deploy them, and solve real problems.',
    steps: [
      { order: 1, title: 'Math Fundamentals', description: 'Linear algebra, calculus, probability, statistics', resources: [{ label: '3Blue1Brown Linear Algebra', href: 'https://www.3blue1brown.com/topics/linear-algebra' }] },
      { order: 2, title: 'Python for Data Science', description: 'NumPy, Pandas, Matplotlib, Seaborn', resources: [{ label: 'Pandas Docs', href: 'https://pandas.pydata.org/docs/' }] },
      { order: 3, title: 'Machine Learning Basics', description: 'Supervised/unsupervised learning, regression, classification, clustering', resources: [{ label: 'Scikit-learn Tutorial', href: 'https://scikit-learn.org/stable/tutorial/index.html' }] },
      { order: 4, title: 'Deep Learning', description: 'Neural networks, TensorFlow, PyTorch, CNNs, RNNs', resources: [{ label: 'PyTorch Tutorials', href: 'https://pytorch.org/tutorials/' }] },
      { order: 5, title: 'NLP & Transformers', description: 'Text processing, embeddings, BERT, GPT, Hugging Face', resources: [{ label: 'Hugging Face Course', href: 'https://huggingface.co/learn/nlp-course' }] },
      { order: 6, title: 'Model Deployment', description: 'Flask/FastAPI serving, Docker, MLflow, cloud deployment', resources: [{ label: 'MLflow Docs', href: 'https://mlflow.org/docs/latest/index.html' }] },
      { order: 7, title: 'MLOps & Pipelines', description: 'Data pipelines, model monitoring, A/B testing, feature stores', resources: [{ label: 'MLOps Guide', href: 'https://ml-ops.org/' }] },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    icon: 'DO',
    color: 'from-amber-500 to-yellow-500',
    description: 'Master DevOps practices, cloud platforms, and infrastructure automation.',
    steps: [
      { order: 1, title: 'Linux & Scripting', description: 'Command line, bash scripting, file permissions, processes', resources: [{ label: 'Linux Journey', href: 'https://linuxjourney.com/' }] },
      { order: 2, title: 'Version Control (Git)', description: 'Branching, merging, rebasing, git workflows, CI/CD', resources: [{ label: 'Git Pro Book', href: 'https://git-scm.com/book/en/v2' }] },
      { order: 3, title: 'Containerization (Docker)', description: 'Images, containers, Docker Compose, multi-stage builds', resources: [{ label: 'Docker Docs', href: 'https://docs.docker.com/' }] },
      { order: 4, title: 'Orchestration (Kubernetes)', description: 'Pods, services, deployments, configmaps, Helm', resources: [{ label: 'Kubernetes Tutorial', href: 'https://kubernetes.io/docs/tutorials/' }] },
      { order: 5, title: 'CI/CD Pipelines', description: 'GitHub Actions, GitLab CI, Jenkins, ArgoCD', resources: [{ label: 'GitHub Actions', href: 'https://docs.github.com/en/actions' }] },
      { order: 6, title: 'Cloud Platforms', description: 'AWS, GCP, or Azure core services, IAM, networking', resources: [{ label: 'AWS Free Tier', href: 'https://aws.amazon.com/free/' }] },
      { order: 7, title: 'Infrastructure as Code', description: 'Terraform, Ansible, Pulumi, CloudFormation', resources: [{ label: 'Terraform Docs', href: 'https://developer.hashicorp.com/terraform/docs' }] },
      { order: 8, title: 'Monitoring & Observability', description: 'Prometheus, Grafana, ELK stack, Datadog, OpenTelemetry', resources: [{ label: 'Prometheus Docs', href: 'https://prometheus.io/docs/' }] },
    ],
  },
  {
    id: 'android',
    title: 'Android Development',
    icon: 'AD',
    color: 'from-green-500 to-emerald-500',
    description: 'Build Android apps with Kotlin, Jetpack Compose, and modern architecture.',
    steps: [
      { order: 1, title: 'Kotlin Basics', description: 'Variables, functions, classes, coroutines, flows', resources: [{ label: 'Kotlin Docs', href: 'https://kotlinlang.org/docs/home.html' }] },
      { order: 2, title: 'Jetpack Compose', description: 'Composables, state, layouts, theming, navigation', resources: [{ label: 'Compose Docs', href: 'https://developer.android.com/compose' }] },
      { order: 3, title: 'Architecture Components', description: 'ViewModel, Room, DataStore, WorkManager, Hilt', resources: [{ label: 'Android Architecture', href: 'https://developer.android.com/topic/architecture' }] },
      { order: 4, title: 'Networking & Data', description: 'Retrofit, Ktor, Moshi/Kotlin Serialization, caching', resources: [{ label: 'Retrofit Docs', href: 'https://square.github.io/retrofit/' }] },
      { order: 5, title: 'UI & Navigation', description: 'Material Design 3, Navigation Compose, animations', resources: [{ label: 'Material 3', href: 'https://m3.material.io/' }] },
      { order: 6, title: 'Testing & Debugging', description: 'JUnit, MockK, Compose testing, Crashlytics', resources: [{ label: 'Android Testing', href: 'https://developer.android.com/testing' }] },
      { order: 7, title: 'Play Store & CI/CD', description: 'App signing, releases, in-app updates, Firebase, Fastlane', resources: [{ label: 'Fastlane Docs', href: 'https://docs.fastlane.tools/' }] },
    ],
  },
];

export default ROADMAPS;
