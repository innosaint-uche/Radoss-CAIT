# CAIT — Complete Product Specification v2.0

## The AI Business Operating System for Nigerian Social Commerce

**Product**: CAIT (Conversational AI Toolkit) by Radoss  
**Engine**: Tock v26.3.0 + Custom Meta Multi-Channel + Payment Intelligence Layer  
**Market**: Nigerian MSMEs (40M+) → African expansion  
**Currency**: Nigerian Naira (₦) — all billing, all pricing  
**Date**: June 2026

---

> *"Simplicity is the ultimate sophistication."* — Leonardo da Vinci

---

## I. THE MARKET TRUTH — What the Data Says

### The Numbers That Matter

| Metric | Value | Source |
|--------|-------|--------|
| Nigerian MSMEs | 40 million+ | Research ICT Africa, 2024 |
| MSMEs using Meta platforms | 14 million | Meta Economic Impact Report, 2025 |
| Meta's economic value to Nigeria | $820 million/year | Meta, May 2026 |
| WhatsApp active users in Nigeria | 51 million+ (projected 110M+ by 2029) | Minister Bosun Tijani / Statista |
| Social commerce market size (Nigeria) | $12.43 billion in 2026 | Research & Markets |
| Social commerce CAGR (2026-2031) | 10.9% → $20.84B by 2031 | Research & Markets |
| MSMEs citing rising costs as #1 pain | 72% | GIZ/DTC Nigeria, 2025 |
| MSMEs actively leveraging digital tools ("Reinventors") | 61% | GIZ/DTC Nigeria, 2025 |
| Businesses saying Meta helped expand customer base | 81% | Meta Impact Report, 2025 |
| WhatsApp AI prompts (% of all Meta AI in Sub-Saharan Africa) | 93% | Meta, 2025 |

### The Consumer Psychology — Why Social Commerce Wins

**The Yoruba say: *"Oju loro wa"* — "Transactions are better had face-to-face."**

Nigerian commerce is fundamentally **relational**, not transactional. Research from TechNext24 and field studies reveal:

1. **Trust is conversational** — Buyers need to talk to sellers before buying. WhatsApp/Instagram DMs replicate the market experience ("Can I see it in blue? Can you do ₦15,000 instead of ₦18,000?")
2. **Customisation drives purchase** — "On Instagram, I can request the bag in leather, suede, six inches instead of four. E-commerce can't do that." (Consumer interview, 2025)
3. **The vendor-customer relationship IS the business** — A hair vendor generating ₦5M/month with zero website, only WhatsApp. This is typical, not exceptional.
4. **Screenshots are receipts** — Payment confirmation via screenshot/bank alert forwarding is the norm. Formal invoicing is the exception.
5. **Price negotiation is cultural** — Fixed-price e-commerce feels foreign. Conversational commerce feels natural.
6. **Social proof is everything** — Instagram Stories, WhatsApp Status, customer testimonials in chat = trust signals.

### The Pain Points — What Keeps Business Owners Awake

| Pain Point | % of MSMEs | CAIT's Answer |
|-----------|-----------|---------------|
| Rising costs (raw materials, logistics, energy) | 72% | AI reduces labour cost of customer service to near-zero |
| Inflation eroding margins | 59% | Data-driven pricing insights, conversion optimization |
| Can't afford equipment/tools | 36% | Free tier — zero capex, start immediately |
| Missed messages = missed sales | ~80% (implied) | 24/7 AI that never sleeps, never ignores a DM |
| No sales records / business intelligence | ~70% | Every conversation becomes structured data |
| Payment verification chaos (screenshots, "I've sent o!") | ~90% | Real-time payment verification via API |
| No customer data / can't predict demand | ~85% | AI-powered CLTV, preferences, purchase patterns |
| Scaling means hiring more people | Universal | AI scales infinitely at fixed cost |

---

## II. THE PRODUCT — What CAIT Actually Does

### The One-Sentence Pitch

**CAIT is the AI that runs your business on WhatsApp, Instagram, and Facebook — answering customers, verifying payments, tracking sales, and growing your business — so you don't have to.**

### The 5-Minute Onboarding (Da Vinci Simplicity)

```
Step 1: Sign up with phone number (60 seconds)
         ↓
Step 2: Connect your WhatsApp Business / Instagram / Facebook (2 minutes)
         → Meta Embedded Signup flow (OAuth)
         → One-click channel activation
         ↓
Step 3: Tell CAIT about your business (2 minutes)
         → Business type auto-detection (pre-set templates)
         → Upload products (photos, prices, descriptions)
         → OR sync existing WhatsApp/Instagram catalog
         → Upload FAQs / business knowledge
         ↓
Step 4: CAIT is live. First customer gets AI response.
         → "Hi! Welcome to [Business Name] 😊
            How can I help you today?"
```

### Core Features — The AI Business Brain

#### 1. MULTI-CHANNEL META INTELLIGENCE

CAIT operates natively across all Meta business channels through a unified AI brain:

| Channel | Status | API | Key Functions |
|---------|--------|-----|---------------|
| **WhatsApp Cloud** | Built in Tock ✓ | Meta Graph API / WhatsApp Cloud API | Messages, Templates, Catalogs, Flows |
| **Instagram Messaging** | New — via Tock connector architecture | Messenger API for Instagram | DM responses, Story replies, Reel comments |
| **Facebook Messenger** | Built in Tock ✓ | Messenger Platform API | Page messages, Ads click-to-message |
| **WhatsApp Catalog** | New — Product sync | WhatsApp Business Catalog API | Product browsing, single/multi-product messages |
| **Click-to-WhatsApp Ads** | New — Conversions API | Meta Marketing API + CAPI | Ad attribution, ROAS tracking, lead capture |

**Super Admin Plug-and-Play:**
```
Dashboard → Settings → Channels
┌────────────────────────────────────┐
│ WhatsApp Business    [● ACTIVE]   │ ← Connected via Embedded Signup
│ Instagram DMs        [○ ACTIVATE] │ ← One-click, requires instagram_manage_messages
│ Facebook Messenger   [○ ACTIVATE] │ ← One-click, requires pages_messaging
│ WhatsApp Catalog     [○ ACTIVATE] │ ← Sync from existing catalog
│ Click-to-WA Ads      [○ ACTIVATE] │ ← Requires Meta Ads account
└────────────────────────────────────┘
```

Each channel is a **toggle**. Super admin flips the switch, CAIT handles the rest — webhook configuration, token management, template registration, compliance. Zero developer needed.

#### 2. AI DOMAIN KNOWLEDGE ENGINE (The Business Brain)

Not a generic chatbot. CAIT has **deep domain understanding**:

```
Knowledge Ingestion Pipeline:
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ Products     │    │ FAQs /       │    │ Business     │
│ (catalog,    │ +  │ Policies     │ +  │ Context      │
│ photos,      │    │ (returns,    │    │ (industry,   │
│ prices)      │    │ shipping,    │    │ location,    │
│              │    │ hours)       │    │ culture)     │
└──────┬───────┘    └──────┬───────┘    └──────┬───────┘
       │                   │                   │
       └───────────────────┼───────────────────┘
                           ↓
                  ┌────────────────┐
                  │ RAG Pipeline   │
                  │ (Vector Store  │
                  │ + LLM)         │
                  └────────┬───────┘
                           ↓
              ┌────────────────────────┐
              │ CAIT Response Engine   │
              │ • Answers in customer's│
              │   language (English,   │
              │   Pidgin, Yoruba hint) │
              │ • Product recommendations│
              │ • Price quotes         │
              │ • Availability checks  │
              │ • Order confirmations  │
              │ • Human handoff when   │
              │   needed               │
              └────────────────────────┘
```

**Pre-Set Business Types** (from Nigerian SME research):

| Business Type | Pre-loaded Knowledge | Auto-configured Flows |
|--------------|---------------------|----------------------|
| **Fashion/Clothing** | Size guides, fabric types, customisation options, delivery timelines | Inquiry → Size check → Price → Payment → Delivery tracking |
| **Food/Restaurant** | Menu, prep time, delivery zones, ingredients | Browse menu → Order → Payment → Preparation update → Delivery |
| **Beauty/Cosmetics** | Product ingredients, skin types, application guides | Consultation → Recommendation → Price → Payment → Usage tips |
| **Electronics** | Specs, warranty, comparison, genuine vs. refurbished | Inquiry → Specs comparison → Price → Payment → Warranty registration |
| **Hair/Wigs** | Types (Brazilian, Peruvian, etc.), lengths, care | Browse → Customisation → Price → Payment → Care guide |
| **Grocery/FMCG** | Product catalog, availability, bulk pricing | Browse → Cart → Payment → Delivery scheduling |
| **Services (Artisan)** | Service menu, availability, portfolio | Inquiry → Quote → Booking → Payment → Service delivery |
| **Real Estate** | Property listings, locations, inspections | Inquiry → Property details → Schedule viewing → Follow-up |
| **Education/Training** | Courses, schedules, testimonials | Inquiry → Course details → Registration → Payment → Access |
| **Health/Pharmacy** | Products, consultations, prescriptions | Inquiry → Consultation → Recommendation → Payment → Delivery |

Each business type comes with:
- Industry-specific conversation templates
- Pre-configured response patterns
- Relevant compliance rules
- Common Nigerian customer objection handling ("Is it original?" "Last price?" "Can you deliver today?")

#### 3. PAYMENT INTELLIGENCE — The Financial Brain

**This is where CAIT transcends "chatbot" and becomes an operating system.**

CAIT verifies payments, tracks revenue, and provides financial intelligence — all from within the conversation.

##### Payment Verification Methods

**Method A: API-Verified Payments (Linked Accounts)**

```
Super Admin → Settings → Payment Integrations
┌────────────────────────────────────────┐
│ Paystack           [● CONNECTED]      │ ← API Key + Secret Key
│ Flutterwave        [○ CONNECT]        │ ← API Key + Secret Key
│ Monnify            [○ CONNECT]        │ ← API Key + Contract Code
│ Moniepoint POS     [● CONNECTED]      │ ← API Key + Client ID
│ Bank Transfer      [● AUTO-DETECT]    │ ← Screenshot/text parsing
└────────────────────────────────────────┘
```

**Integration Architecture:**

| Provider | API Method | Webhook Events | CAIT Function |
|----------|-----------|----------------|---------------|
| **Paystack** | `GET /transaction/verify/:ref` | `charge.success` | Real-time payment confirmation in chat |
| **Flutterwave** | `GET /v3/transactions/:id/verify` | `charge.completed` | Auto-confirm + receipt generation |
| **Monnify** | `GET /api/v1/merchant/transactions/query` | `SUCCESSFUL_TRANSACTION` | Transfer verification |
| **Moniepoint POS** | Webhook subscription `POST /v1/webhook-subscriptions` | `V1_POS_TRANSACTION` | POS sale auto-logging + receipt |

**The Moniepoint POS Flow (example):**
```
1. Customer pays at POS terminal
2. Moniepoint fires webhook → CAIT endpoint
   {
     "eventType": "V1_POS_TRANSACTION",
     "businessId": "...",
     "amount": 15000,
     "transactionRef": "TXN-..."
   }
3. CAIT matches transaction to pending order in conversation
4. CAIT sends WhatsApp confirmation:
   "✅ Payment of ₦15,000 received for your order #47.
    Your items will be ready for pickup in 30 minutes.
    Thank you for shopping with [Business Name]!"
5. Sale logged → Analytics updated → Inventory adjusted
```

**Method B: Screenshot/Text Verification (Unlinked — AI-Powered)**

For businesses not yet on formal payment APIs:

```
Customer sends: [Screenshot of bank transfer alert]
                OR
                "I just sent 25000 to your Opay account"
                OR
                [PDF of payment receipt]

CAIT processes:
1. Image/PDF OCR → Extract amount, sender, reference, date
2. Text NLP → Parse natural language payment claims
3. Cross-reference with pending orders
4. Confidence scoring (High / Medium / Flag for human review)
5. Response:
   "Thanks! I can see a transfer of ₦25,000 from [Name].
    Let me confirm this with [Business Owner]..."
   OR (if high confidence + auto-confirm enabled):
   "✅ Payment confirmed! Your order is being processed."
```

##### Financial Intelligence Dashboard

Every transaction — whether API-verified, screenshot-confirmed, or manually logged — feeds into the intelligence layer:

```
┌─────────────────────────────────────────────────────────┐
│                 CAIT BUSINESS DASHBOARD                  │
│                                                         │
│  Today's Revenue: ₦847,500         Orders: 43          │
│  ████████████████████░░░░░  74% of daily target        │
│                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐    │
│  │ Conversion  │  │ Avg. Order  │  │ Response     │    │
│  │   Rate      │  │   Value     │  │   Time       │    │
│  │   34.2%     │  │  ₦19,700    │  │   < 8 sec    │    │
│  └─────────────┘  └─────────────┘  └─────────────┘    │
│                                                         │
│  TOP PRODUCTS TODAY          CUSTOMER SEGMENTS          │
│  1. Ankara Fabric ₦312K      New: 12 | Returning: 31  │
│  2. Hair Bundle ₦198K        VIP (>₦100K/mo): 8       │
│  3. Sneakers   ₦156K         At-risk (no buy 30d): 15 │
│                                                         │
│  PAYMENT METHODS                                        │
│  Transfer: 67% | POS: 22% | Paystack: 11%             │
│                                                         │
│  AI INSIGHTS                                            │
│  ⚡ "Hair Bundles" inquiries up 340% — restock alert   │
│  📈 Tuesdays are your best sales day (3-week pattern)  │
│  👤 Customer "Amaka O." has ₦450K lifetime value       │
│  💡 15 customers asked about delivery to Port Harcourt │
│     — consider adding this delivery zone               │
└─────────────────────────────────────────────────────────┘
```

#### 4. CUSTOMER INTELLIGENCE — The Growth Brain

**Every "hello" is data. Every conversation is a customer profile building itself.**

```
Customer Profile (auto-built from conversations):
┌─────────────────────────────────────────────────┐
│ 👤 Amaka Okonkwo                                │
│                                                 │
│ First contact: March 12, 2026                   │
│ Channel: WhatsApp (+234 802 XXX XXXX)          │
│ Also on: Instagram (@amaka_style)               │
│                                                 │
│ PURCHASE HISTORY                                │
│ ├── Mar 12: Ankara Fabric (2 yards) — ₦8,000  │
│ ├── Mar 28: Custom Dress — ₦25,000            │
│ ├── Apr 15: Hair Bundle (18") — ₦45,000       │
│ ├── May 03: Lace Material — ₦12,000           │
│ └── Jun 01: Custom Suit — ₦35,000             │
│                                                 │
│ METRICS                                         │
│ Total Spend: ₦125,000                          │
│ Lifetime Value (projected): ₦450,000           │
│ Purchase Frequency: Every 2.1 weeks             │
│ Avg Order Value: ₦25,000                       │
│ Preferred Channel: WhatsApp (90%)               │
│ Response to Marketing: 78% open rate            │
│                                                 │
│ PREFERENCES (AI-extracted)                      │
│ • Prefers Ankara and Lace fabrics               │
│ • Always asks for custom sizing (Size 12-14)    │
│ • Price-sensitive above ₦50,000                 │
│ • Responds well to "new arrival" messages       │
│ • Delivery: Lekki Phase 1 preferred             │
│                                                 │
│ AI RECOMMENDATIONS                              │
│ 🎯 Send new Ankara collection preview (due)     │
│ ⏰ Re-engage in 3 days (purchase cycle)         │
│ 💰 Offer 5% loyalty discount on next order      │
│ 📦 Has never bought accessories — cross-sell    │
└─────────────────────────────────────────────────┘
```

**Key Intelligence Metrics (per customer + aggregate):**

| Metric | What It Measures | Why It Matters |
|--------|-----------------|----------------|
| **CLTV (Customer Lifetime Value)** | Projected total revenue per customer | Know which customers to invest in |
| **LTV (Lifetime Value)** | Actual historical revenue per customer | Track real vs. projected value |
| **Message-to-Conversion Rate** | % of conversations that result in sale | Measure AI effectiveness |
| **Inquiry-to-Payment Time** | Average time from first message to payment | Optimize sales funnel speed |
| **Customer Acquisition Cost** | Cost per new customer acquired | Measure marketing efficiency |
| **Churn Prediction Score** | Probability customer won't return | Trigger re-engagement before lost |
| **Product Affinity Map** | What products each customer segment prefers | Smart inventory + recommendations |
| **Peak Engagement Times** | When customers are most active by channel | Optimize marketing message timing |
| **Payment Method Preference** | How each customer prefers to pay | Reduce payment friction |
| **Delivery Zone Heat Map** | Where customers are located | Expansion planning + logistics |

#### 5. SOCIAL COMMERCE ENGINE — The Marketing Brain

##### WhatsApp Flows (Pre-built per business type)

```
Example: Fashion Business
┌───────────────────────────────────────────────────┐
│ FLOW: New Arrival Broadcast                       │
│                                                   │
│ Trigger: New product added to catalog             │
│ Audience: Customers who bought similar items      │
│ Template: "Hi {name}! 🆕 New {category} just     │
│           dropped — {product_name} for ₦{price}.  │
│           Reply 1 to see photos, 2 to order now." │
│                                                   │
│ Customer replies "1"                              │
│   → CAIT sends product carousel (multi-product    │
│     message via WhatsApp Catalog API)             │
│                                                   │
│ Customer replies "2"                              │
│   → CAIT initiates order flow                     │
│   → Payment link (Paystack) or bank details       │
│   → Confirmation on payment webhook               │
│                                                   │
│ METRICS: Sent: 342 | Opened: 298 | Ordered: 47   │
│          Conversion: 13.7% | Revenue: ₦2.1M      │
└───────────────────────────────────────────────────┘
```

##### Instagram Integration Flows

```
Customer comments on Reel: "How much?"
  → CAIT auto-DMs: "Hi! The {product} is ₦{price}.
    Would you like to order? I can process it right here 😊"
  → Conversation continues in DM
  → Payment → Delivery → Follow-up

Customer replies to Story: "Is this available?"
  → CAIT checks inventory (catalog API)
  → "Yes! Available in sizes S, M, L. Which would you like?"
  → Sale completed entirely in DM
```

##### Click-to-WhatsApp Ads Integration

```
Meta Ads Manager → Click-to-WhatsApp Campaign
  ↓
Customer clicks ad → Opens WhatsApp conversation
  ↓
CAIT captures ctwa_clid (attribution token)
  ↓
AI engages customer based on ad context:
"Hi! I see you're interested in our {ad_product}.
 Let me tell you about our current promotion..."
  ↓
Conversation → Sale → Payment
  ↓
CAIT fires Conversions API event:
POST /v18.0/{pixel_id}/events
{
  "event_name": "Purchase",
  "event_time": timestamp,
  "action_source": "business_messaging",
  "messaging_channel": "whatsapp",
  "user_data": { "ctwa_clid": "..." },
  "custom_data": { "value": 25000, "currency": "NGN" }
}
  ↓
Meta optimizes ad delivery for more buyers like this
  ↓
ROAS improves automatically
```

##### Catalog Sync Architecture

```
CAIT Catalog Manager
  ↓
  ├── Sync FROM WhatsApp Catalog (existing businesses)
  │   └── GET /v18.0/{WABA_ID}/product_catalogs
  │
  ├── Sync TO WhatsApp Catalog (new products)
  │   └── POST /v18.0/{catalog_id}/products
  │
  ├── Sync WITH Instagram Shopping
  │   └── Commerce Manager API (shared catalog)
  │
  └── Sync WITH Facebook Shop
      └── Same Commerce Manager catalog

All channels share ONE product catalog.
Update once → appears everywhere.
```

---

## III. SUPER ADMIN ARCHITECTURE — The Control Center

### Dashboard Layout (Da Vinci Proportion — ONE primary action per screen)

```
CAIT Admin Panel
├── 🏠 Home (Daily snapshot: revenue, messages, alerts)
├── 💬 Conversations (Live inbox across all channels)
├── 📊 Analytics (Business intelligence dashboard)
├── 🛍️ Catalog (Products, inventory, pricing)
├── 💰 Payments (Transactions, verification, reconciliation)
├── 👥 Customers (CRM, segments, profiles)
├── 📣 Marketing (Broadcasts, flows, ads)
├── 🤖 AI Settings (Knowledge base, personality, responses)
├── ⚙️ Settings
│   ├── Channels (Meta channel toggles)
│   ├── Payment Integrations (Paystack, Flutterwave, Monnify, Moniepoint)
│   ├── Business Profile (Name, type, hours, policies)
│   ├── Team (Staff accounts, permissions)
│   ├── Billing (Subscription, usage, invoices)
│   └── API (Developer access, webhooks)
└── 📖 Help (Guides, videos, support)
```

### Plug-and-Play API Settings

Every integration is a card with three states:

```
┌──────────────────────────────────┐
│ 🟢 ACTIVE                       │
│ Paystack                        │
│ Connected since Mar 12, 2026    │
│ Transactions today: 12          │
│ [Configure] [Disconnect]        │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│ 🟡 AVAILABLE                    │
│ Flutterwave                     │
│ Accept payments via Flutterwave │
│ [Connect Now →]                 │
│ Requires: API Key, Secret Key   │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│ ⚪ COMING SOON                   │
│ Opay Integration                │
│ Direct Opay transfer verification│
│ [Notify me when available]      │
└──────────────────────────────────┘
```

### Feature Flags (Super Admin Level)

```yaml
# These are toggled in the Super Admin panel
# Users see only what's activated for their tier
feature_flags:
  channels:
    whatsapp_cloud: true          # Core — always on
    instagram_messaging: false    # Toggle per user/tier
    facebook_messenger: false     # Toggle per user/tier
    whatsapp_catalog: false       # Toggle per user/tier
    click_to_whatsapp_ads: false  # Toggle — Pro+ only

  payments:
    paystack: true                # Default on
    flutterwave: false            # Toggle
    monnify: false                # Toggle
    moniepoint_pos: false         # Toggle
    screenshot_verification: true  # Default on (AI-powered)

  intelligence:
    basic_analytics: true         # All tiers
    customer_profiles: true       # All tiers
    cltv_prediction: false        # Pro+ only
    churn_prediction: false       # Business+ only
    inventory_alerts: false       # Pro+ only
    marketing_automation: false   # Business+ only
    conversions_api: false        # Business+ only
    custom_reports: false         # Enterprise only

  ai:
    auto_response: true           # Core
    product_recommendation: true   # All tiers
    payment_verification: true     # All tiers
    sentiment_analysis: false     # Pro+ only
    language_detection: true      # All tiers
    human_handoff: true           # All tiers
    voice_notes_transcription: false  # Pro+ only (future)
```

---

## IV. PRICING — In Naira, For Nigerians

### Pricing Philosophy

> Price like you understand the hustle. ₦500/day is nothing when CAIT saves you 8 hours.

| Plan | Monthly Price | Annual Price | Target |
|------|-------------|-------------|--------|
| **Ọfẹ́ (Free)** | ₦0 | ₦0 | Solo vendors, testing |
| **Ọjà (Market)** | ₦15,000/mo | ₦150,000/yr (save ₦30K) | Growing SMEs |
| **Ọba (King)** | ₦45,000/mo | ₦450,000/yr (save ₦90K) | Established businesses |
| **Aládé (Enterprise)** | Custom | Custom | Multi-location, agencies |

*Names are Yoruba — culturally resonant, memorable, aspirational.*

### Plan Details

| Feature | Ọfẹ́ (Free) | Ọjà (Market) | Ọba (King) | Aládé (Enterprise) |
|---------|----------|-------------|----------|-----------------|
| WhatsApp Channel | ✓ | ✓ | ✓ | ✓ |
| Instagram DMs | — | ✓ | ✓ | ✓ |
| Facebook Messenger | — | ✓ | ✓ | ✓ |
| AI Conversations/month | 500 | 5,000 | Unlimited | Unlimited |
| Products in Catalog | 20 | 200 | Unlimited | Unlimited |
| Payment Integrations | 1 | 3 | All | All + Custom |
| Screenshot Verification | ✓ | ✓ | ✓ | ✓ |
| Customer Profiles | 50 | 500 | Unlimited | Unlimited |
| Basic Analytics | ✓ | ✓ | ✓ | ✓ |
| CLTV & Predictions | — | — | ✓ | ✓ |
| Marketing Broadcasts | 100/mo | 2,000/mo | Unlimited | Unlimited |
| WhatsApp Catalog Sync | — | ✓ | ✓ | ✓ |
| Click-to-WA Ads | — | — | ✓ | ✓ |
| Conversions API | — | — | ✓ | ✓ |
| Team Members | 1 | 3 | 10 | Unlimited |
| API Access | — | — | ✓ | ✓ |
| Priority Support | — | — | ✓ | Dedicated |
| Custom AI Training | — | — | — | ✓ |
| White-label | — | — | — | ✓ |

**Payment Methods:**
- Paystack (card, bank transfer, USSD)
- Bank transfer (auto-verified)
- USSD payment (*737#, *901#, etc.)

---

## V. UX DESIGN — Copies and Communication That Convert

### Landing Page (getcait.ng)

**Hero Section:**
```
CAIT
Your AI sales rep that never sleeps.

WhatsApp. Instagram. Facebook.
One AI handles all your customers.

[Start Free — 5 Minutes ↗]

"Since I connected CAIT, my sales went up 340%
 and I stopped losing customers at 2am."
 — Chioma, Fashion vendor, Lagos
```

**How It Works Section:**
```
1. CONNECT
   Link your WhatsApp Business
   in 2 minutes. No coding.
   No wahala.

2. TEACH
   Upload your products and prices.
   CAIT learns your business
   like your best sales person.

3. SELL
   CAIT answers customers 24/7.
   Verifies payments. Tracks sales.
   You focus on what matters.
```

**Social Proof Section:**
```
"CAIT saved me from hiring 3 extra staff."
 — Emeka, Electronics, Computer Village

"My customers don't even know it's AI.
 They say my customer service improved!"
 — Blessing, Hair vendor, Trade Fair

"The payment verification alone
 saved me ₦200K in fake transfer alerts."
 — Tunde, Restaurant, Ibadan
```

**Pricing Section:**
```
Start free. Upgrade when you grow.

Ọfẹ́ — ₦0/month
For vendors just starting out.
500 AI conversations. 1 channel.
[Start Free]

Ọjà — ₦15,000/month
For growing businesses.
5,000 conversations. All channels.
[Start 7-Day Trial]

Ọba — ₦45,000/month
For established businesses.
Unlimited everything. Full analytics.
[Start 7-Day Trial]
```

### In-App Communication Tone

**CAIT's personality to end-users (the business owner's customers):**
- Warm but professional
- Responds in the customer's language (English, Pidgin, or mixed)
- Uses appropriate emoji (sparingly, like a real person)
- Never robotic — mirrors Nigerian conversational patterns
- Handles "How much?" gracefully (not defensively)
- Understands "Last price?" (negotiation culture)
- Says "Let me check" instead of "I don't know"

**Example conversations:**

```
CUSTOMER: Hi, how much is the Brazilian hair?
CAIT: Hi! 😊 Welcome to GlamHair by Ada.
      Our Brazilian Hair bundles are:
      • 14" — ₦35,000
      • 18" — ₦45,000
      • 22" — ₦55,000
      Closure included. Would you like to see photos?

CUSTOMER: Abeg the 18" one, last price nko?
CAIT: I understand! The best I can do for the 18"
      is ₦42,000 with free delivery within Lagos.
      Should I process your order? 🛍️

CUSTOMER: Ok send your account
CAIT: Great choice! 🎉
      Please transfer ₦42,000 to:
      GTBank — 0123456789 — Ada Hair Empire
      Send your payment confirmation here
      and I'll process your order immediately.

CUSTOMER: [Sends screenshot of bank alert]
CAIT: ✅ Payment of ₦42,000 confirmed!
      Your Brazilian 18" bundle will be packaged
      and sent via GIG Logistics today.
      Tracking number coming in 2 hours.
      Thank you, and enjoy! 💜
```

---

## VI. TECHNICAL ARCHITECTURE — Production System

### System Architecture

```
                        ┌─────────────────┐
                        │   Cloudflare    │
                        │   CDN / WAF     │
                        │   DDoS Shield   │
                        └────────┬────────┘
                                 │
          ┌──────────────────────┼──────────────────────┐
          │                      │                      │
   ┌──────▼──────┐       ┌──────▼──────┐       ┌──────▼──────┐
   │  getcait.ng │       │  API Gateway │       │ CAIT Studio │
   │  (Landing)  │       │  (Vert.x)   │       │ (Angular)   │
   │  Next.js    │       │  Auth+Route  │       │ Admin Panel │
   └─────────────┘       └──────┬───────┘       └─────────────┘
                                │
         ┌──────────────────────┼──────────────────────┐
         │                      │                      │
  ┌──────▼──────┐       ┌──────▼──────┐       ┌──────▼──────┐
  │  Tock Bot   │       │  Tock NLP   │       │  Gen AI     │
  │  Engine     │       │  Engine     │       │  Orchestrator│
  │  (Kotlin)   │       │  (Kotlin)   │       │  (Python)   │
  │             │       │             │       │  RAG + LLM  │
  └──────┬──────┘       └──────┬──────┘       └──────┬──────┘
         │                     │                      │
         │              ┌──────▼──────┐       ┌──────▼──────┐
         │              │  MongoDB    │       │  OpenSearch  │
         │              │  Atlas      │       │  (Vectors)  │
         │              │  (Lagos     │       │             │
         │              │   region)   │       │             │
         │              └─────────────┘       └─────────────┘
         │
    ┌────▼────────────────────────────────┐
    │         META CHANNELS               │
    │                                     │
    │  ┌──────────┐  ┌──────────────┐    │
    │  │ WhatsApp │  │ Instagram    │    │
    │  │ Cloud API│  │ Messaging API│    │
    │  └──────────┘  └──────────────┘    │
    │  ┌──────────┐  ┌──────────────┐    │
    │  │ Messenger│  │ Catalog API  │    │
    │  │ Platform │  │ + Ads/CAPI   │    │
    │  └──────────┘  └──────────────┘    │
    └─────────────────────────────────────┘
    ┌─────────────────────────────────────┐
    │       PAYMENT PROVIDERS             │
    │                                     │
    │  ┌──────────┐  ┌──────────────┐    │
    │  │ Paystack │  │ Flutterwave  │    │
    │  │ Webhooks │  │ Webhooks     │    │
    │  └──────────┘  └──────────────┘    │
    │  ┌──────────┐  ┌──────────────┐    │
    │  │ Monnify  │  │ Moniepoint   │    │
    │  │ Webhooks │  │ POS Webhooks │    │
    │  └──────────┘  └──────────────┘    │
    └─────────────────────────────────────┘
```

### Data Model (Core Entities)

```
Tenant (Business Account)
├── id, name, business_type, plan_tier
├── meta_waba_id, meta_page_id, meta_ig_id
├── channels[] (active channel configs)
├── payment_integrations[] (provider configs)
├── knowledge_base (RAG documents)
├── catalog (products[])
│   └── Product: name, price_ngn, description, images[], variants[], inventory_count
├── customers[]
│   └── Customer: phone, ig_handle, fb_id, conversations[], purchases[], preferences, cltv_score
├── conversations[]
│   └── Conversation: channel, customer_id, messages[], status, outcome, revenue
├── transactions[]
│   └── Transaction: amount_ngn, provider, reference, status, verified_by, customer_id
├── analytics (aggregated metrics)
└── settings (feature_flags, ai_personality, business_hours, team_members[])
```

### Multi-Tenancy Strategy

```
Single database, tenant-isolated collections:

MongoDB Atlas:
├── cait_tenants (master tenant registry)
├── cait_tenant_{id}_conversations
├── cait_tenant_{id}_customers
├── cait_tenant_{id}_transactions
├── cait_tenant_{id}_catalog
├── cait_tenant_{id}_analytics
└── cait_tenant_{id}_knowledge

OpenSearch:
├── cait_vectors_{tenant_id} (RAG embeddings per tenant)
└── cait_analytics_{tenant_id} (search analytics)
```

---

## VII. IMPLEMENTATION ROADMAP

### Phase 1: Foundation (Weeks 1-3) — "First Customer Served"

```
Deliverables:
✓ Docker containerisation of all Tock services
✓ GKE deployment with auto-scaling
✓ MongoDB Atlas provisioned (Lagos-proximate region)
✓ WhatsApp Cloud connector activated and tested
✓ Basic RAG pipeline (business knowledge → AI responses)
✓ Rebranded Admin UI (CAIT Studio — basic)
✓ Simple onboarding flow (connect WA → upload knowledge → go live)
✓ Basic analytics (messages, conversations, response times)

Milestone: First real Nigerian business answers customers via CAIT
```

### Phase 2: Payment Intelligence (Weeks 3-5) — "First Payment Verified"

```
Deliverables:
✓ Paystack webhook integration (charge.success → confirmation)
✓ Screenshot/image payment verification (OCR + AI)
✓ Transaction logging and reconciliation
✓ Moniepoint POS webhook integration
✓ Basic revenue dashboard
✓ Payment confirmation auto-response in WhatsApp

Milestone: First payment automatically verified and confirmed in chat
```

### Phase 3: Multi-Channel + Catalog (Weeks 5-7) — "Everywhere at Once"

```
Deliverables:
✓ Instagram Messaging connector (new Tock connector)
✓ Facebook Messenger connector (existing, configured)
✓ WhatsApp Catalog sync (product management)
✓ Cross-channel customer identity merge
✓ Unified inbox across all channels
✓ Pre-set business type templates (10 types)

Milestone: First business selling on WhatsApp + Instagram from one dashboard
```

### Phase 4: Intelligence Layer (Weeks 7-9) — "Knows Your Customers Better Than You"

```
Deliverables:
✓ Customer profile auto-building
✓ CLTV calculation and prediction
✓ Churn prediction and re-engagement triggers
✓ Product recommendation engine
✓ Sales analytics (conversion rates, AOV, peak times)
✓ AI-powered insights ("Hair bundle inquiries up 340%")
✓ Flutterwave + Monnify integrations

Milestone: First AI-generated insight that drives a business decision
```

### Phase 5: Marketing & Ads (Weeks 9-11) — "Growth on Autopilot"

```
Deliverables:
✓ WhatsApp broadcast / marketing messages
✓ Click-to-WhatsApp Ads integration
✓ Conversions API (CAPI) for ROAS optimization
✓ Automated marketing flows (abandoned cart, re-engagement, new arrival)
✓ A/B testing for message templates
✓ Campaign analytics

Milestone: First ROAS-tracked sale from Click-to-WhatsApp Ad
```

### Phase 6: Scale & Launch (Weeks 11-13) — "Nigeria Meets CAIT"

```
Deliverables:
✓ Landing page (getcait.ng) live
✓ Billing system (Paystack, ₦ pricing)
✓ 50 beta businesses onboarded
✓ Load testing (10,000 concurrent conversations)
✓ Security audit + NDPR compliance
✓ Product Hunt + TechCabal + Techpoint Africa launch
✓ WhatsApp viral referral system

Milestone: Public launch. First 1,000 signups.
```

---

## VIII. DESIGN SYSTEM — The Da Vinci Code

### Color Palette

```
Primary Green:    #1B8A6B  (Trust — WhatsApp adjacent)
Nigerian Gold:    #D4A843  (Prosperity, cultural warmth)
Deep Navy:        #0A1628  (Technology, depth, authority)
Clean White:      #FFFFFF  (Clarity, space, breathing room)
Success Green:    #22C55E  (Payment confirmed, positive states)
Alert Amber:      #F59E0B  (Attention needed, pending)
Error Red:        #EF4444  (Failed, declined, urgent)
Soft Gray:        #F1F5F9  (Backgrounds, cards, subtle boundaries)
```

### Typography

```
Headlines:    Inter Bold (32px-48px) — clean, authoritative, universal
Body:         Inter Regular (14px-16px) — readable on mobile (Nigerian users are 95% mobile)
Numbers:      Inter Mono (dashboards, amounts) — precise, financial
Accent:       Inter Semibold — CTAs, labels, emphasis
```

### Design Rules (Da Vinci Principles Applied)

1. **Proportion (Sezione Aurea)**: Every screen follows the golden ratio for content-to-whitespace. Mobile-first — 95% of Nigerian users are on mobile.

2. **Chiaroscuro (Light & Shadow)**: Dark admin dashboard (#0A1628 background) with bright data cards. Light customer-facing pages. The eye goes where the light is.

3. **Sfumato (Soft Transitions)**: No jarring page loads. Smooth transitions. Progressive disclosure — show 3 metrics first, reveal more on scroll.

4. **Contrapposto (Dynamic Balance)**: Action on the left (conversation), data on the right (analytics). Always balanced, never cluttered.

5. **Minimal Viable Pixel**: If removing an element doesn't break comprehension, remove it. Every pixel earns its place.

---

## IX. SUCCESS METRICS — How We Know It's Working

| Metric | Month 1 | Month 3 | Month 6 | Month 12 |
|--------|---------|---------|---------|----------|
| Businesses onboarded | 100 | 1,000 | 5,000 | 25,000 |
| Monthly conversations handled | 50K | 500K | 5M | 50M |
| MRR (₦) | ₦1.5M | ₦15M | ₦75M | ₦375M |
| Conversion rate (msg → sale) | 15% | 25% | 35% | 40% |
| NPS (Net Promoter Score) | 40 | 50 | 65 | 75 |
| Viral coefficient | 0.3 | 0.8 | 1.2 | 1.5 |
| Churn rate (monthly) | 15% | 10% | 5% | 3% |

---

## X. THE VERDICT

**CAIT is not a chatbot. It's the AI operating system for the $12.4 billion Nigerian social commerce market.**

Every conversation = data. Every payment = intelligence. Every customer = a profile building itself. Every interaction = the business getting smarter.

The fork of Tock gives us 8 years of enterprise-grade AI infrastructure. The Meta channel integrations put us where 14 million Nigerian businesses already are. The payment intelligence layer speaks the language of Nigerian commerce (transfers, POS, screenshots, "I don sent am").

**The Da Vinci Code decoded: Hide the supercomputer. Show the simplicity. Ship the soul-freeing machine.**

*"I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do."* — Leonardo da Vinci

**Now we do.**
