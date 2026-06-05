# CodeSprout Deployment Guide (Render)

## Architecture

```
┌──────────────┐     ┌──────────────┐
│   Frontend   │     │    Admin     │  (Static sites on Render)
│   :5173      │     │    :5174     │
└──────┬───────┘     └──────┬───────┘
       │                    │
       └────────┬───────────┘
                ▼
       ┌────────────────┐
       │  API Gateway   │  codesprout-gateway.onrender.com
       │   (port 3000)  │
       └────────┬───────┘
                │ proxies by URL prefix
   ┌────────────┼────────────┬─────────────┬──────────────┐
   ▼            ▼            ▼             ▼              ▼
┌──────┐   ┌──────┐    ┌──────┐     ┌──────────┐    ┌──────────┐
│ Auth │   │Content│   │Social│    │Execution │    │ Payment  │
│ 3001 │   │ 3002  │   │ 3003 │    │   3004   │    │   3005   │
└──────┘   └──────┘    └──────┘    └──────────┘    └──────────┘
                            │
                            ▼
                    ┌──────────────┐
                    │   MongoDB    │  (MongoDB Atlas free tier)
                    └──────────────┘
```

## Render Services

| Service | Type | Internal Port | Public URL |
|---------|------|---------------|------------|
| codesprout-gateway | web (node) | 3000 | `*.onrender.com` (public) |
| codesprout-auth | web (node) | 10001 | internal only |
| codesprout-content | web (node) | 10002 | internal only |
| codesprout-social | web (node) | 10003 | internal only |
| codesprout-execution | web (node) | 10004 | internal only |
| codesprout-payment | web (node) | 10005 | internal only |
| codesprout-frontend | static | — | `*.onrender.com` (public) |
| codesprout-admin | static | — | `*.onrender.com` (public) |

## Setup Steps

### 1. MongoDB Atlas (Free Tier)
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free cluster (M0 Sandbox)
3. Create database user (save the password!)
4. Whitelist IP: `0.0.0.0/0` (allow from anywhere, since Render IPs are dynamic)
5. Get the connection string: `mongodb+srv://user:pass@cluster.mongodb.net/codesprout?retryWrites=true&w=majority`

### 2. Push to GitHub
```bash
cd "E:\code project"
git init  # if not already
git add .
git commit -m "feat: microservice architecture + render deploy"
git remote add origin https://github.com/your-username/codesprout.git
git push -u origin main
```

### 3. Deploy on Render
1. Go to https://dashboard.render.com
2. Click **New** → **Blueprint**
3. Connect your GitHub repo
4. Render auto-detects `render.yaml`
5. Review the 8 services, click **Apply**
6. Wait for all services to deploy (~5 min)

### 4. Configure Environment Variables
In Render dashboard, for each service, set:

**On `codesprout-gateway`, `codesprout-content`, `codesprout-social`, `codesprout-auth`, `codesprout-execution`, `codesprout-payment`:**
- `MONGODB_URL` = your MongoDB connection string
- `CORS_ORIGINS` = `https://codesprout-frontend.onrender.com,https://codesprout-admin.onrender.com` (your actual URLs)
- `JWT_SECRET` = auto-generated (sync across services)

**On `codesprout-gateway` and `codesprout-payment` only:**
- `UPI_ID` = your UPI ID (e.g., `name@ybl`)
- `OPENROUTER_API_KEY` = your OpenRouter API key (for AI chat)

**On `codesprout-execution` only:**
- `OPENROUTER_API_KEY` = same key as above

### 5. Update Frontend/Admin After First Deploy
1. Get the gateway URL from Render dashboard (e.g., `https://codesprout-gateway.onrender.com`)
2. The `VITE_API_URL` env var auto-injects into frontend and admin
3. Trigger a redeploy of frontend + admin (they need the gateway URL at build time)

### 6. Update Gateway CORS
1. After frontend + admin URLs are known, update `CORS_ORIGINS` on all backend services
2. Trigger a redeploy of backend services

## Local Microservice Development

```bash
# Start all 6 services (gateway + 5 microservices) with hot reload
cd backend
npm run dev:microservices

# In separate terminals:
cd frontend && npm run dev
cd admin && npm run dev
```

Gateway runs on `http://localhost:3000`, services on 3001-3005.
Frontend proxy points to `http://localhost:3000` (gateway).

## Local Single-Process Development (Faster)

```bash
cd backend
npm run dev  # All routes on http://localhost:3001
```

Frontend proxy points to `http://localhost:3000` by default. Override with:
```bash
VITE_API_URL=http://localhost:3001 npm run dev
```

## Production URLs (after deploy)

- Frontend: `https://codesprout-frontend.onrender.com`
- Admin: `https://codesprout-admin.onrender.com`
- Gateway API: `https://codesprout-gateway.onrender.com/api`
- Health check: `https://codesprout-gateway.onrender.com/health`

## Cost (Free Tier Limits)

- 6 web services × 750 hrs/month = 4500 hrs (enough for all 6 on free tier)
- 2 static sites = free forever
- MongoDB Atlas M0 = 512MB free

Total: **$0/month** for a hobby project.
