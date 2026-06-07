export interface BankQuestion {
  question: string;
  answer: string;
  tags: string[];
}

export interface SubjectBank {
  basic: BankQuestion[];
  intermediate: BankQuestion[];
  advanced: BankQuestion[];
}

const cache = new Map<string, SubjectBank>();

// ========== SUBJECT-SPECIFIC TERMS & CONCEPTS ==========

interface SubjectVocab {
  concepts: string[];
  comparePairs: [string, string][];
  tools: string[];
}

const VOCAB: Record<string, SubjectVocab> = {
  'Data Structures & Algorithms': {
    concepts: ['arrays', 'linked lists', 'stacks', 'queues', 'hash tables', 'binary trees', 'heaps', 'graphs', 'binary search trees', 'tries', 'priority queues', 'circular buffers', 'adjacency matrices', 'adjacency lists', 'trees'],
    comparePairs: [['arrays', 'linked lists'], ['stacks', 'queues'], ['BFS', 'DFS'], ['hash tables', 'balanced BSTs'], ['min-heap', 'max-heap'], ['trees', 'graphs'], ['recursion', 'iteration'], ['binary search', 'linear search'], ['bubble sort', 'quick sort'], ['breadth-first', 'depth-first']],
    tools: ['priority queue', 'hash map', 'adjacency list', 'tail pointer', 'sentinel node', 'backtracking', 'memoization', 'divide and conquer', 'two pointers', 'sliding window'],
  },
  'Object-Oriented Programming': {
    concepts: ['classes', 'objects', 'inheritance', 'polymorphism', 'encapsulation', 'abstraction', 'interfaces', 'abstract classes', 'method overriding', 'method overloading', 'constructors', 'destructors', 'access modifiers', 'static methods', 'virtual functions'],
    comparePairs: [['class', 'object'], ['inheritance', 'composition'], ['overloading', 'overriding'], ['abstract class', 'interface'], ['public', 'private'], ['static', 'instance'], ['compile-time polymorphism', 'runtime polymorphism'], ['deep copy', 'shallow copy'], ['tight coupling', 'loose coupling'], ['inheritance', 'aggregation']],
    tools: ['friend class', 'virtual table', 'RAII', 'smart pointers', 'copy constructor', 'factory pattern', 'singleton pattern', 'observer pattern', 'decorator pattern', 'strategy pattern'],
  },
  'System Design': {
    concepts: ['load balancers', 'database sharding', 'caching strategies', 'message queues', 'CDN', 'microservices', 'CAP theorem', 'consistency models', 'rate limiting', 'event-driven architecture', 'WebSockets', 'REST APIs', 'gRPC', 'blob storage', 'key-value stores'],
    comparePairs: [['vertical scaling', 'horizontal scaling'], ['SQL', 'NoSQL'], ['REST', 'gRPC'], ['synchronous', 'asynchronous'], ['monolith', 'microservices'], ['write-through cache', 'write-behind cache'], ['strong consistency', 'eventual consistency'], ['polling', 'WebSockets'], ['sharding', 'partitioning'], ['API Gateway', 'load balancer']],
    tools: ['Redis', 'Kafka', 'RabbitMQ', 'Nginx', 'AWS S3', 'DynamoDB', 'Cassandra', 'Elasticsearch', 'Memcached', 'ZooKeeper'],
  },
  DBMS: {
    concepts: ['normalization', 'ACID properties', 'transactions', 'indexes', 'joins', 'group by', 'subqueries', 'stored procedures', 'views', 'triggers', 'cursors', 'foreign keys', 'candidate keys', 'functional dependencies', 'locking mechanisms'],
    comparePairs: [['primary key', 'foreign key'],['WHERE', 'HAVING'], ['INNER JOIN', 'LEFT JOIN'], ['UNION', 'JOIN'], ['clustered index', 'non-clustered index'], ['DELETE', 'TRUNCATE'], ['view', 'materialized view'],['row-level lock', 'table-level lock'],['pessimistic', 'optimistic locking'],['vertical partitioning', 'horizontal partitioning']],
    tools: ['B-tree index','hash index','query optimizer','explain plan','transaction log','checkpoint','savepoint','deadlock detection','two-phase locking','MVCC'],
  },
  'Operating Systems': {
    concepts: ['process','thread','deadlock','semaphore','mutex','page fault','virtual memory','context switching','scheduling algorithms','paging','segmentation','TLB','interrupts','system calls','file systems'],
    comparePairs: [['process','thread'],['mutex','semaphore'],['paging','segmentation'],['FCFS','Round Robin'],['preemptive','non-preemptive scheduling'],['user mode','kernel mode'],['internal fragmentation','external fragmentation'],['asynchronous I/O','synchronous I/O'],['hard link','soft link'],['UDP','TCP in OS context']],
    tools: ['page table','inode','PCB','LRU page replacement','FIFO page replacement','Belady anomaly','dining philosophers','producer-consumer','readers-writers','banker algorithm'],
  },
  JavaScript: {
    concepts: ['closures','prototype chain','event loop','hoisting','promises','async/await','callbacks','arrow functions','template literals','destructuring','spread operator','modules','generators','symbols','iterators'],
    comparePairs: [['let','const'],['==','==='],['null','undefined'],['promise','async/await'],['map','forEach'],['spread','rest operator'],['var','let'],['CommonJS','ES modules'],['sessionStorage','localStorage'],['call','apply']],
    tools: ['V8 engine','Web APIs','microtask queue','macrotask queue','setTimeout','setInterval','requestAnimationFrame','fetch API','IntersectionObserver','Proxy object'],
  },
  TypeScript: {
    concepts: ['interfaces','types','generics','enums','union types','intersection types','type guards','decorators','utility types','mapped types','conditional types','index signatures','overloads','namespaces','modules'],
    comparePairs: [['interface','type alias'],['any','unknown'],['never','void'],['public','private'],['enum','const enum'],['abstract class','interface'],['type assertion','type guard'],['declaration merging','module augmentation'],['strict mode','non-strict mode'],['namespace','module']],
    tools: ['Partial','Required','Pick','Omit','Record','Readonly','ReturnType','Parameters','Awaited','satisfies operator'],
  },
  React: {
    concepts: ['JSX','virtual DOM','hooks','state','props','context','refs','portals','fragments','higher-order components','render props','error boundaries','Suspense','lazy loading','controlled components'],
    comparePairs: [['state','props'],['useEffect','useLayoutEffect'],['useState','useReducer'],['useMemo','useCallback'],['React.memo','useMemo'],['controlled','uncontrolled components'],['class component','functional component'],['Context API','prop drilling'],['React Router','next/navigation'],['SSR','CSR']],
    tools: ['useRef','useContext','forwardRef','React.lazy','React.memo','createPortal','StrictMode','useTransition','useDeferredValue','flushSync'],
  },
  'HTML & CSS': {
    concepts: ['box model','flexbox','grid','positioning','specificity','pseudo-classes','pseudo-elements','media queries','responsive design','animations','transitions','variables','selectors','cascading','semantic HTML'],
    comparePairs: [['block','inline'],['relative','absolute positioning'],['rem','em units'],['flexbox','grid'],['nth-child','nth-of-type'],['margin','padding'],['visibility:hidden','display:none'],['translate','top/left'],['min-width','max-width'],['class','ID selectors']],
    tools: ['calc()','clamp()','min()','max()','custom properties','@keyframes','object-fit','aspect-ratio','container queries','subgrid'],
  },
  'Browser Concepts': {
    concepts: ['critical rendering path','DOM','CSSOM','reflow','repaint','event bubbling','event capturing','CORS','Content Security Policy','service workers','web workers','IndexedDB','cookie storage','requestAnimationFrame','intersection observer'],
    comparePairs: [['cookies','localStorage'],['event bubbling','capturing'],['reflow','repaint'],['service workers','web workers'],['sessionStorage','IndexedDB'],['defer','async scripts'],['HTTP/1.1','HTTP/2'],['XSS','CSRF'],['first paint','first contentful paint'],['DOMContentLoaded','load']],
    tools: ['Chrome DevTools','Lighthouse','WebP','lazy loading','preload','prefetch','dns-prefetch','Timeline API','PerformanceObserver','ResizeObserver'],
  },
  'Node.js': {
    concepts: ['event loop','libuv','streams','buffers','cluster','child_process','event emitter','Express.js','middleware','package.json','npm','REPL','commonjs','ECMAScript modules','worker_threads'],
    comparePairs: [['require','import'],['Readable','Writable streams'],['spawn','fork'],['process.nextTick','setImmediate'],['npm','yarn'],['CommonJS','ESM'],['Buffer','typed arrays'],['cluster','worker_threads'],['crypto','bcrypt'],['http','https module']],
    tools: ['PM2','nodemon','dotenv','morgan','helmet','cors','multer','socket.io','passport','winston'],
  },
  'Express.js': {
    concepts: ['middleware','routing','error handling','request object','response object','CORS','body parsing','file upload','authentication','rate limiting','template engines','static files','environments','helmet','compression'],
    comparePairs: [['app.use','app.get'],['route params','query params'],['res.json','res.send'],['next()','next(err)'],['express.json','express.urlencoded'],['session','JWT'],['development','production config'],['Router','app-level middleware'],['multer single','array'],['cookie-parser','express-session']],
    tools: ['express-validator','express-rate-limit','passport','multer','cors','helmet','morgan','compression','swagger-jsdoc','express-async-errors'],
  },
  SQL: {
    concepts: ['SELECT','JOIN','GROUP BY','HAVING','subqueries','indexes','normalization','transactions','views','triggers','CTEs','window functions','stored procedures','ACID','query optimization'],
    comparePairs: [['INNER','LEFT JOIN'],['WHERE','HAVING'],['UNION','UNION ALL'],['DELETE','TRUNCATE'],['clustered','non-clustered index'],['ROW_NUMBER','RANK'],['correlated subquery','non-correlated'],['VIEW','materialized view'],['PRIMARY KEY','UNIQUE constraint'],['CHAR','VARCHAR']],
    tools: ['EXPLAIN ANALYZE','pgAdmin','MySQL Workbench','connection pooling','query plan','deadlock detection','vacuum','pg_stat_statements','SQL injection','connection timeout'],
  },
  MongoDB: {
    concepts: ['documents','collections','aggregation pipeline','indexes','replication','sharding','embedded documents','references','$lookup','indexes','ObjectId','write concern','read preference','text search','geospatial queries'],
    comparePairs: [['MongoDB','SQL'],['embedding','referencing'],['$lookup','SQL JOIN'],['single field','compound index'],['replica set','sharded cluster'],['writeConcern majorit','acknowledged'],['find','aggregate'],['TTL index','sparse index'],['text index','2dsphere index'],['primary','secondary reads']],
    tools: ['MongoDB Compass','Mongoose','mongosh','Atlas','change streams','transactions','$bucket','$facet','$merge','$out'],
  },
  'API Design': {
    concepts: ['REST','HTTP methods','status codes','pagination','filtering','sorting','authentication','rate limiting','versioning','HATEOAS','idempotency','caching','content negotiation','error handling','response formatting'],
    comparePairs: [['GET','POST'],['PUT','PATCH'],['400','422 status'],['JWT','OAuth2'],['API key','session token'],['page-based','cursor-based pagination'],['URL versioning','header versioning'],['REST','GraphQL'],['JSON','XML response'],['cache-control','ETag']],
    tools: ['Postman','Swagger','OpenAPI','axios','insomnia','curl','jwt.io','Redis caching','rate-limit','API gateway'],
  },
  Python: {
    concepts: ['decorators','generators','context managers','list comprehensions','lambda functions','magic methods','properties','descriptors','asyncio','multiprocessing','threading','duck typing','type hints','dataclasses','*args **kwargs'],
    comparePairs: [['list','tuple'],['set','frozenset'],['deep copy','shallow copy'],['__str__','__repr__'],['threading','multiprocessing'],['classmethod','staticmethod'],['property','attribute'],['async def','generator'],['Dict','TypedDict'],['ABC','Protocol']],
    tools: ['pandas','numpy','fastapi','pytest','black','mypy','flake8','celery','sqlalchemy','pydantic'],
  },
  Excel: {
    concepts: ['VLOOKUP','XLOOKUP','INDEX-MATCH','PivotTables','conditional formatting','data validation','named ranges','array formulas','power query','power pivot','DAX','slicers','dynamic arrays','spill ranges','what-if analysis'],
    comparePairs: [['VLOOKUP','XLOOKUP'],['VLOOKUP','INDEX-MATCH'],['COUNTIF','COUNTIFS'],['SUMIF','SUMIFS'],['table','range'],['pivot table','pivot chart'],['relative','absolute reference'],['IF','IFS function'],['NOW','TODAY'],['DATE','DATEDIF']],
    tools: ['power query','power pivot','solver','goal seek','macro','VBA','sparklines','forecast sheet','data model','power map'],
  },
  Statistics: {
    concepts: ['mean','median','mode','standard deviation','variance','correlation','p-value','confidence interval','hypothesis testing','regression','normal distribution','central limit theorem','Bayes theorem','ANOVA','chi-square'],
    comparePairs: [['mean','median'],['variance','standard deviation'],['correlation','causation'],['Type I','Type II error'],['one-tailed','two-tailed test'],['parametric','non-parametric'],['t-test','z-test'],['population','sample variance'],['probability','likelihood'],['Bayesian','frequentist']],
    tools: ['R','scipy','statsmodels','SPSS','SAS','Tableau','Excel Analysis Toolpak','JMP','Minitab','Power BI'],
  },
  'Data Visualization': {
    concepts: ['bar chart','line chart','scatter plot','histogram','heatmap','box plot','pie chart','area chart','radar chart','waterfall chart','treemap','dashboard','KPI','data-ink ratio','color theory'],
    comparePairs: [['bar chart','histogram'],['line chart','area chart'],['scatter plot','bubble chart'],['pie chart','donut chart'],['bar chart','column chart'],['Tableau','Power BI'],['light theme','dark theme'],['diverging','sequential palette'],['data-ink','chartjunk'],['exploratory','explanatory analysis']],
    tools: ['Tableau','Power BI','Matplotlib','Seaborn','D3.js','Plotly','ggplot2','Highcharts','Chart.js','Looker'],
  },
  'Machine Learning': {
    concepts: ['supervised learning','unsupervised learning','overfitting','underfitting','bias-variance tradeoff','cross-validation','gradient descent','decision trees','random forest','SVM','neural networks','feature engineering','regularization','precision-recall','ROC curve'],
    comparePairs: [['supervised','unsupervised learning'],['classification','regression'],['bagging','boosting'],['precision','recall'],['L1','L2 regularization'],['train','test split'],['underfitting','overfitting'],['batch gradient descent','stochastic'],['SVM','logistic regression'],['k-fold','leave-one-out CV']],
    tools: ['scikit-learn','XGBoost','LightGBM','TensorFlow','PyTorch','MLflow','Kubeflow','Weights & Biases','Hyperopt','SHAP'],
  },
  'Deep Learning': {
    concepts: ['neural networks','backpropagation','activation functions','CNNs','RNNs','LSTM','attention mechanism','transformers','batch normalization','dropout','embedding layers','transfer learning','GANs','autoencoders','gradient vanishing'],
    comparePairs: [['CNN','RNN'],['ReLU','sigmoid activation'],['batch normalization','layer normalization'],['dropout','L2 regularization'],['SGD','Adam optimizer'],['vanishing gradient','exploding gradient'],['RNN','LSTM'],['encoder','decoder'],['supervised','self-supervised learning'],['fine-tuning','feature extraction']],
    tools: ['TensorFlow','PyTorch','Keras','Hugging Face','ONNX','JAX','CUDA','cuDNN','TensorBoard','Weights & Biases'],
  },
  'Linear Algebra': {
    concepts: ['vectors','matrices','dot product','cross product','eigenvalues','eigenvectors','singular value decomposition','linear transformations','matrix factorization','orthogonality','projections','determinant','inverse','rank','trace'],
    comparePairs: [['vector','scalar'],['dot product','cross product'],['eigenvalue','singular value'],['column space','null space'],['transpose','inverse'],['orthogonal','orthonormal'],['SVD','PCA'],['LU','QR decomposition'],['linear','affine transformation'],['sparse','dense matrix']],
    tools: ['NumPy','MATLAB','Wolfram Alpha','SymPy','LAPACK','BLAS','Eigen library','Armadillo','Octave','SciPy linear algebra'],
  },
  Linux: {
    concepts: ['file permissions','pipes','process management','cron jobs','shell scripting','grep','awk','sed','cgroups','journalctl','systemd','kernel modules','swap','mount points','symbolic links'],
    comparePairs: [['hard link','soft link'],['cron','systemd timer'],['ps','top'],['grep','find'],['awk','sed'],['tcpdump','netstat'],['user mode','kernel mode'],['bash','zsh'],['apt','yum'],['ext4','xfs']],
    tools: ['systemctl','journalctl','htop','iotop','tcpdump','strace','perf','valgrind','gdb','lsof'],
  },
  Docker: {
    concepts: ['images','containers','Dockerfile','layers','volumes','networks','compose','registry','entrypoint','CMD','multi-stage builds','health checks','resource limits','secrets','dockerignore'],
    comparePairs: [['image','container'],['CMD','ENTRYPOINT'],['COPY','ADD'],['bridge','host network'],['volume','bind mount'],['Docker Compose','Kubernetes'],['RUN','CMD in Dockerfile'],['docker run','docker exec'],['Docker Hub','private registry'],['Docker Swarm','Kubernetes']],
    tools: ['Docker Desktop','Docker Hub','Portainer','Kitematic','docker-compose','buildkit','kaniko','harbor','trivy','dive'],
  },
  Kubernetes: {
    concepts: ['pods','deployments','services','ingress','configmaps','secrets','persistent volumes','namespaces','RBAC','horizontal pod autoscaler','probes','daemonsets','statefulsets','jobs','cronjobs'],
    comparePairs: [['deployment','statefulset'],['ClusterIP','NodePort'],['configmap','secret'],['deployment','daemonset'],['job','cronjob'],['readiness','liveness probe'],['ingress','load balancer'],['horizontal','vertical autoscaling'],['resource requests','limits'],['service mesh','CNI plugin']],
    tools: ['kubectl','helm','minikube','kind','k9s','kustomize','prometheus','grafana','istio','calico'],
  },
  'CI/CD': {
    concepts: ['pipeline','stages','jobs','artifacts','automated testing','deployment strategies','branch protection','environment variables','secrets management','trunk-based development','rollbacks','gating','code quality','caching','triggers'],
    comparePairs: [['CI','CD'],['blue-green','canary deployment'],['push trigger','PR trigger'],['GitHub Actions','Jenkins'],['caching','purging'],['parallel','sequential stages'],['build tool','package manager'],['rolling update','blue-green'],['unit test','integration test'],['self-hosted','cloud runner']],
    tools: ['GitHub Actions','Jenkins','GitLab CI','CircleCI','Travis CI','ArgoCD','Terraform','Ansible','Spinnaker','Drone CI'],
  },
  AWS: {
    concepts: ['EC2','S3','Lambda','RDS','VPC','IAM','CloudFront','Route 53','DynamoDB','ECS','EKS','CloudFormation','CloudWatch','SQS','SNS'],
    comparePairs: [['EC2','Lambda'],['S3','EBS'],['RDS','DynamoDB'],['SQS','SNS'],['security group','NACL'],['ALB','NLB'],['CloudFront','S3 static hosting'],['IAM user','IAM role'],['provisioned','on-demand EC2'],['Auto Scaling','ELB']],
    tools: ['AWS CLI','CloudFormation','Terraform','AWS CDK','boto3','SAM CLI','CloudWatch','X-Ray','Trusted Advisor','Cost Explorer'],
  },
  Networking: {
    concepts: ['TCP/IP','UDP','DNS','DHCP','HTTP/HTTPS','TLS/SSL','IP addressing','subnetting','routing','NAT','firewalls','load balancing','VPN','CDN','packet switching'],
    comparePairs: [['TCP','UDP'],['IPv4','IPv6'],['HTTP','HTTPS'],['switch','router'],['hub','switch'],['WAN','LAN'],['DNS','DHCP'],['firewall','IDS'],['NAT','PAT'],['TLS','SSL']],
    tools: ['Wireshark','nmap','tcpdump','ping','traceroute','netstat','curl','dig','iperf','openssl'],
  },
  'Testing Fundamentals': {
    concepts: ['unit testing','integration testing','E2E testing','mocking','stubs','fixtures','TDD','BDD','code coverage','test pyramid','snapshot testing','parameterized tests','test runners','assertions','test doubles'],
    comparePairs: [['mock','stub'],['unit','integration test'],['TDD','BDD'],['Jest','Mocha'],['Jasmine','Mocha'],['statement','branch coverage'],['spy','mock'],['fake','stub'],['white-box','black-box testing'],['regression','smoke testing']],
    tools: ['Jest','Mocha','Jasmine','Cypress','Playwright','Puppeteer','Selenium','Karma','Chai','Sinon'],
  },
  Selenium: {
    concepts: ['WebDriver','WebElement','locators','page object model','explicit waits','implicit waits','fluent waits','TestNG','screenshots','headless mode','cross-browser testing','actions class','JavaScriptExecutor','alerts','multi-browser'],
    comparePairs: [['findElement','findElements'],['implicit','explicit wait'],['XPath','CSS selector'],['By.id','By.name'],['TestNG','JUnit'],['Selenium IDE','WebDriver'],['ChromeDriver','GeckoDriver'],['Page Object','Page Factory'],['single window','multiple windows'],['headless','headed mode']],
    tools: ['Selenium IDE','WebDriver','ChromeDriver','GeckoDriver','BoneIO','Gecko','TestNG','JUnit','Cucumber','Extent Reports'],
  },
  Automation: {
    concepts: ['test scripts','data-driven testing','keyword-driven','hybrid framework','CI/CD integration','parallel execution','test reports','continuous testing','flaky tests','environment management','test data management','logging','screenshots','retry mechanism','waits'],
    comparePairs: [['data-driven','keyword-driven testing'],['linear','modular framework'],['hybrid','data-driven'],['CI','CD pipeline'],['serial','parallel execution'],['local','remote execution'],['Selenium Grid','Docker'],['retry','skip on failure'],['screenshot','video recording'],['console log','HTTP log']],
    tools: ['Selenium Grid','Docker','Jenkins','Maven','Gradle','Allure','Log4j','TestLink','Zephyr','Jira'],
  },
  'HR Questions': {
    concepts: ['self-introduction','strengths','weaknesses','career goals','leadership','teamwork','conflict resolution','time management','adaptability','problem-solving','communication','achievement','failure','motivation','cultural fit'],
    comparePairs: [['strength','weakness'],['goal','achievement'],['teamwork','leadership'],['verbal','written communication'],['short-term','long-term goal'],['technical','behavioral question'],['individual','team achievement'],['formal','informal communication'],['positive','constructive feedback'],['mentor','manager role']],
    tools: ['STAR method','PAR method','CAR method','SOAR analysis','SWOT analysis','SMART goals','Johari window','360 feedback','MBTI','emotional intelligence'],
  },
  Communication: {
    concepts: ['active listening','verbal communication','written communication','non-verbal cues','presentation skills','technical writing','stakeholder management','meeting facilitation','negotiation','feedback','conflict resolution','storytelling','data narrative','documentation','cross-cultural communication'],
    comparePairs: [['verbal','written communication'],['formal','informal communication'],['synchronous','asynchronous communication'],['technical','non-technical audience'],['email','instant messaging'],['report','presentation'],['one-on-one','team meeting'],['giving','receiving feedback'],['documentation','verbal explanation'],['assertive','aggressive communication']],
    tools: ['Slack','Confluence','Notion','Miro','Grammarly','Hemingway app','Loom','Otter.ai','Excalidraw','draw.io'],
  },
  Aptitude: {
    concepts: ['probability','permutations','combinations','time speed distance','work efficiency','profit loss','simple interest','compound interest','percentages','ratio proportion','averages','number series','logarithm','geometry','algebra'],
    comparePairs: [['permutation','combination'],['simple','compound interest'],['profit','loss percentage'],['average','median'],['ratio','proportion'],['speed','velocity'],['time work','time pipe'],['probability','odds'],['AP','GP series'],['discount','marked price']],
    tools: ['shortcut formulas','percentage trick','unit conversion','LCM approach','approximation','calculation tricks','data sufficiency','puzzle solving','time management','accuracy vs speed'],
  },
};

// ========== QUESTION & ANSWER TEMPLATES ==========

const BASIC_QT = [
  'What is {concept}?',
  'Explain {concept} with an example.',
  'How does {concept} work?',
  'What is the purpose of {concept}?',
  'Define {concept}.',
  'What do you understand by {concept}?',
  'Describe {concept} in simple terms.',
  'What are the key characteristics of {concept}?',
  'Give a real-world analogy for {concept}.',
  'Why is {concept} important?',
];

const BASIC_ANSWERS: Record<string, (c: string) => string> = {
  'What is {concept}?': (c) => `${c} is a fundamental concept used to organize and manage data or behavior in computing. It provides a structured way to represent information.`,
  'Explain {concept} with an example.': (c) => `${c} works by encapsulating related data and operations together. For instance, when you use a hash map, keys are mapped to values for O(1) lookups.`,
  'How does {concept} work?': (c) => `${c} operates by maintaining internal state and exposing controlled operations. It abstracts away complexity behind a simple interface.`,
  'What is the purpose of {concept}?': (c) => `The main purpose of ${c} is to enable efficient data organization, improve code maintainability, and solve common programming problems.`,
  'Define {concept}.': (c) => `${c} is a well-defined programming construct that represents a reusable pattern or structure in software development.`,
  'What do you understand by {concept}?': (c) => `${c} refers to a standardized approach for handling specific programming scenarios, providing both structure and behavior.`,
  'Describe {concept} in simple terms.': (c) => `${c} is like a container or template that helps you organize your code in a predictable and reusable way.`,
  'What are the key characteristics of {concept}?': (c) => `The key characteristics of ${c} include encapsulation of state, well-defined interfaces, and predictable behavior under various conditions.`,
  'Give a real-world analogy for {concept}.': (c) => `${c} can be compared to a filing system where information is organized logically, making it easy to find and manage.`,
  'Why is {concept} important?': (c) => `${c} is critical because it provides a proven solution pattern, reduces code duplication, and makes systems easier to understand and maintain.`,
};

const INTERMEDIATE_QT = [
  'Compare and contrast {a} and {b} in terms of advantages and use cases.',
  'When would you choose {a} over {b}? Give reasons.',
  'What are the pros and cons of using {a} vs {b}?',
  'How do you decide between {a} and {b} in a production system?',
  'Explain a scenario where {a} is better than {b}.',
  'What are the key differences between {a} and {b}?',
  'Describe the trade-offs when choosing between {a} and {b}.',
  'In what situations would {a} fail but {b} succeed?',
  'How does {a} complement {b} in a larger architecture?',
  'What performance implications exist when using {a} versus {b}?',
];

const INTERMEDIATE_ANSWERS: Record<string, (a: string, b: string) => string> = {
  'Compare and contrast {a} and {b} in terms of advantages and use cases.': (a, b) => `${a} excels at specific scenarios where direct access or simplicity is needed, while ${b} shines in situations requiring flexibility or scalability. Choose based on your access patterns and consistency requirements.`,
  'When would you choose {a} over {b}? Give reasons.': (a, b) => `Choose ${a} over ${b} when your primary concern is performance for that specific use case, or when the architecture naturally favors ${a}'s approach over ${b}'s.`,
  'What are the pros and cons of using {a} vs {b}?': (a, b) => `${a} offers simplicity and speed for targeted operations but may lack ${b}'s flexibility. ${b} provides more features and adaptability at the cost of additional complexity or overhead.`,
  'How do you decide between {a} and {b} in a production system?': (a, b) => `The decision depends on: data volume, access patterns, team expertise, operational complexity, and future scalability needs. ${a} fits simpler cases while ${b} handles complex requirements.`,
  'Explain a scenario where {a} is better than {b}.': (a, b) => `${a} is better when you need fast, direct operations with minimal overhead. ${b} would add unnecessary complexity for such straightforward requirements.`,
  'What are the key differences between {a} and {b}?': (a, b) => `The main difference is that ${a} optimizes for specific access patterns with simpler semantics, while ${b} provides richer features at the cost of additional complexity.`,
  'Describe the trade-offs when choosing between {a} and {b}.': (a, b) => `${a} trades flexibility for performance, while ${b} trades simplicity for adaptability. Your choice should align with the system's primary requirements.`,
  'In what situations would {a} fail but {b} succeed?': (a, b) => `${a} fails when the requirements exceed its design scope, such as needing advanced querying or complex relationships. ${b} succeeds because it was built for such complexity.`,
  'How does {a} complement {b} in a larger architecture?': (a, b) => `In practice, ${a} handles the simple hot-path operations while ${b} manages complex workflows. They work together to provide both speed and capability.`,
  'What performance implications exist when using {a} versus {b}?': (a, b) => `${a} typically offers lower latency for its specific use case, while ${b} may have higher overhead but provides more features. Profile your workload to make the right call.`,
};

const ADVANCED_QT = [
  'How would you implement a production-ready solution using {concept}?',
  'What are the scalability limitations of {concept} and how would you address them?',
  'Design a system that leverages {concept} for high availability.',
  'What security considerations apply when using {concept}?',
  'How do you test and debug issues related to {concept}?',
  'Describe a performance optimization technique using {concept}.',
  'What are the anti-patterns or common mistakes with {concept}?',
  'How would you monitor and measure the effectiveness of {concept}?',
  'Explain a migration strategy from an older approach to {concept}.',
  'What edge cases must be handled when implementing {concept}?',
];

const ADVANCED_ANSWERS: Record<string, (c: string) => string> = {
  'How would you implement a production-ready solution using {concept}?': (c) => `For production ${c}, start with a proof of concept, add comprehensive error handling, implement monitoring with metrics and alerts, set up automated testing, and plan for graceful degradation under load.`,
  'What are the scalability limitations of {concept} and how would you address them?': (c) => `Common limitations include resource contention, synchronization overhead, and memory constraints. Mitigate with horizontal scaling, message queues for async processing, and caching layers.`,
  'Design a system that leverages {concept} for high availability.': (c) => `Design with redundancy: multiple instances behind a load balancer, health checks, automated failover, circuit breakers, and graceful degradation. Use ${c} as the core coordination mechanism.`,
  'What security considerations apply when using {concept}?': (c) => `Key security concerns: input validation, authentication, rate limiting, data encryption, least privilege access, and audit logging. Apply defense-in-depth with multiple security layers.`,
  'How do you test and debug issues related to {concept}?': (c) => `Use unit tests for core logic, integration tests for system interactions, structured logging with correlation IDs, distributed tracing, and canary deployments to catch issues before full rollout.`,
  'Describe a performance optimization technique using {concept}.': (c) => `Profile the bottleneck first, then apply targeted optimizations: caching with TTL, connection pooling, batch processing, lazy loading, or async processing with ${c} to offload work.`,
  'What are the anti-patterns or common mistakes with {concept}?': (c) => `Common mistakes: over-engineering before needed, ignoring error cases, tight coupling, premature optimization, lack of monitoring, and not planning for failure scenarios.`,
  'How would you monitor and measure the effectiveness of {concept}?': (c) => `Track key metrics: response times, throughput, error rates, resource utilization, and user impact. Set up dashboards and alerts. Conduct regular load tests and capacity planning.`,
  'Explain a migration strategy from an older approach to {concept}.': (c) => `Use strangler fig pattern: gradually replace components, maintain backward compatibility, run old and new in parallel, compare metrics, and cut over when confident. Rollback plan is essential.`,
  'What edge cases must be handled when implementing {concept}?': (c) => `Handle: null/empty inputs, concurrent access, partial failures, timeout scenarios, data corruption detection, and resource cleanup in error paths. Defensive programming is critical.`,
};

// ========== GENERATOR ==========

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateBasic(concepts: string[]): BankQuestion[] {
  const result: BankQuestion[] = [];
  for (const concept of concepts) {
    for (const qt of BASIC_QT) {
      const q = qt.replace('{concept}', concept);
      const answer = (BASIC_ANSWERS[qt] || ((c: string) => `${c} is important for building robust software systems.`))(concept);
      result.push({ question: q, answer, tags: [concept.replace(/\s+/g, '-').toLowerCase(), 'fundamental'] });
    }
  }
  return shuffle(result);
}

function generateIntermediate(comparePairs: [string, string][]): BankQuestion[] {
  const result: BankQuestion[] = [];
  for (const [a, b] of comparePairs) {
    for (const qt of INTERMEDIATE_QT) {
      const q = qt.replace('{a}', a).replace('{b}', b);
      const answer = (INTERMEDIATE_ANSWERS[qt] || ((x: string, y: string) => `Choose between ${x} and ${y} based on your specific requirements, access patterns, and scalability needs.`))(a, b);
      result.push({ question: q, answer, tags: [a.replace(/\s+/g, '-').toLowerCase(), b.replace(/\s+/g, '-').toLowerCase(), 'comparison'] });
    }
  }
  return shuffle(result);
}

function generateAdvanced(concepts: string[]): BankQuestion[] {
  const result: BankQuestion[] = [];
  for (const concept of concepts) {
    for (const qt of ADVANCED_QT) {
      const q = qt.replace('{concept}', concept);
      const answer = (ADVANCED_ANSWERS[qt] || ((c: string) => `Production-ready ${c} requires careful planning, testing, monitoring, and iterative improvement.`))(concept);
      result.push({ question: q, answer, tags: [concept.replace(/\s+/g, '-').toLowerCase(), 'advanced'] });
    }
  }
  return shuffle(result);
}

function generateForSubject(name: string): SubjectBank {
  const vocab = VOCAB[name];
  if (!vocab) return { basic: [], intermediate: [], advanced: [] };
  const basic = generateBasic(vocab.concepts).slice(0, 100);
  const intermediate = generateIntermediate(vocab.comparePairs).slice(0, 100);
  const advanced = generateAdvanced(vocab.tools.length ? vocab.tools : vocab.concepts).slice(0, 50);
  return { basic, intermediate, advanced };
}

export function getSubjectQuestions(subject: string, difficulty: 'basic' | 'intermediate' | 'advanced'): BankQuestion[] {
  const lower = subject.toLowerCase().trim();
  // Check cache first
  for (const [key, bank] of cache.entries()) {
    if (key.toLowerCase() === lower || lower.includes(key.toLowerCase()) || key.toLowerCase().includes(lower)) {
      return bank[difficulty] || [];
    }
  }
  // Generate
  for (const [key, _vocab] of Object.entries(VOCAB)) {
    if (key.toLowerCase() === lower || lower.includes(key.toLowerCase()) || key.toLowerCase().includes(lower)) {
      const bank = generateForSubject(key);
      cache.set(key, bank);
      return bank[difficulty] || [];
    }
  }
  return [];
}

export function getAllSubjectNames(): string[] {
  return Object.keys(VOCAB);
}