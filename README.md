# AutoWork

### Multi-Tenant Email Automation & pCloud Workflow SaaS

AutoWork is a multi-tenant SaaS platform designed to automate email campaigns and document workflows using authenticated pCloud storage, verified email providers, contacts, templates, campaigns, background workers, and execution tracking.

The platform is designed around a real production workflow rather than a simulated demo:

**Authentication → Organization → pCloud → Files → Contacts → Verified Sender → Template → Campaign → Queue → Worker → Provider Operation → External Result → Execution Logs → Analytics**

## 🚀 Core Capabilities

* Multi-tenant organization architecture
* Secure authentication and RBAC
* pCloud account authentication and integration
* Regional pCloud API discovery
* Real pCloud folder and file browsing
* pCloud file metadata and attachment handling
* Contact and contact-list management
* CSV/XLSX contact imports
* Email templates with variables
* Campaign creation and execution
* Verified sender/provider architecture
* Redis/BullMQ background processing
* Campaign and automation workers
* Execution and error logging
* Real-time communication with Socket.IO
* PostgreSQL persistence with Prisma
* Docker-based infrastructure
* Production-oriented security controls

## 🧩 Technology Stack

### Backend

* TypeScript
* NestJS 10
* Prisma 5
* PostgreSQL 15
* Redis 7
* BullMQ 5
* Socket.IO
* Swagger/OpenAPI
* JWT / Passport
* bcrypt

### Frontend

* Next.js 16
* React 19
* TypeScript
* Axios
* Zustand
* TanStack React Query
* React Hook Form
* Tailwind CSS
* Socket.IO Client

### Integrations

* pCloud API
* Gmail
* Microsoft
* SMTP
* Redis/BullMQ

## 🏗️ Architecture

```text
                    ┌─────────────────────┐
                    │      AutoWork       │
                    │   SaaS Platform     │
                    └──────────┬──────────┘
                               │
              ┌────────────────┴────────────────┐
              │                                 │
       ┌──────▼──────┐                   ┌──────▼──────┐
       │   Next.js   │                   │   NestJS    │
       │  Frontend   │◄──── REST ───────►│     API     │
       └─────────────┘                   └──────┬──────┘
                                                │
                         ┌──────────────────────┼─────────────────────┐
                         │                      │                     │
                  ┌──────▼──────┐       ┌──────▼──────┐       ┌──────▼──────┐
                  │ PostgreSQL  │       │    Redis    │       │   pCloud    │
                  │   + Prisma  │       │   + BullMQ  │       │     API     │
                  └─────────────┘       └──────┬──────┘       └─────────────┘
                                                │
                                         ┌──────▼──────┐
                                         │   Workers   │
                                         │ Campaign /  │
                                         │   pCloud    │
                                         └─────────────┘
```

## 🔐 Security

AutoWork is designed with production security in mind, including:

* Tenant-level data isolation
* Role-based access control
* Server-side authorization
* Secure authentication
* Authentication rate limiting
* Encrypted external credentials
* Environment-based secret configuration
* Audit and error logging
* Ownership checks
* Production-safe provider configuration
* No silent mock-provider fallback

**Production credentials and secrets are intentionally excluded from the repository.**

## 📊 Project Status

The project has completed a major development and security-hardening phase.

Current implementation includes the core SaaS architecture, pCloud integration, contacts, templates, campaigns, workers, logging, provider adapters, and Docker infrastructure.

The final production stage focuses on genuine end-to-end acceptance testing with real pCloud and sender-provider accounts.

## 🎯 Production Acceptance Flow

```text
Real Login
    ↓
Real Organization
    ↓
Real pCloud Account
    ↓
Real File
    ↓
Real Contacts
    ↓
Real Sender
    ↓
Real Recipient
    ↓
Real Template
    ↓
Real Attachment
    ↓
Real Campaign
    ↓
Redis / BullMQ
    ↓
Real Worker
    ↓
Real Provider Operation
    ↓
Real External Result
    ↓
Execution Log
    ↓
Analytics
```

The project blueprint defines this real-world workflow as the acceptance standard rather than relying on UI success states or simulated provider responses.

## 🧪 Validation

The project includes backend automated testing, frontend production builds, Prisma tooling, Docker infrastructure, and dedicated worker processes.

The documented final acceptance process requires real integration testing, including a controlled one-recipient campaign before expanding to larger tests.

## 👨‍💻 Developer

**Aritra Bhattacharya**

Full Stack Developer | SaaS | Backend | Automation | Cloud Integrations

This project demonstrates practical experience designing and integrating a full-stack SaaS platform with authentication, multi-tenancy, external APIs, asynchronous processing, database architecture, provider integrations, and production-oriented security.
