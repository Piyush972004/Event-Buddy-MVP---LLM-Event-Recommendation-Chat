# 🎉 Event Buddy MVP

**Event Buddy** is an AI-powered chat interface that helps users discover local events based on their personal preferences. This MVP leverages natural language understanding to provide intelligent event recommendations and real-time notifications through an elegant, messaging-inspired UI.


## 🌐 Live Preview
[![Live Preview](https://gilded-florentine-2013b2.netlify.app/)

---

## ✨ Features

- 💬 **Natural Language Chat Interface**  
  Users interact with the system naturally using everyday language.

- 🧠 **LLM-Powered Recommendations**  
  Integrates mock LangChain services to simulate NLP for understanding preferences and recommending events.

- 🔔 **Smart Notifications**  
  Users are alerted when relevant events are approaching nearby.

- ⚙️ **Preference Management**  
  Users can set and refine preferences for personalized suggestions over time.

- 🔍 **Event Browsing & Filtering**  
  Explore a curated list of events with category filters and custom views.

- 📦 **Mock Event Database**  
  Comes with diverse categories to simulate real-world event discovery.

---

## 🖥️ Interface Design

- Inspired by **WhatsApp/Telegram** chat design
- Clean, modern UI with **bubble chat layout**
- Smooth **animations** for typing indicators and message flow
- **Responsive layout** for mobile and desktop
- **Card-based event displays** for quick scanning
- High accessibility with **high-contrast text** and **appropriate font sizing**

---

## 🎨 Color System

| Purpose       | Color     | Hex       |
|---------------|-----------|-----------|
| Primary       | Purple    | `#7C3AED` |
| Secondary     | Teal      | `#0D9488` |
| Accent        | Pink      | `#EC4899` |
| Success       | Green     | `#10B981` |
| Warning       | Yellow    | `#F59E0B` |
| Error         | Red       | `#EF4444` |
| Neutral       | Gray      | `#6B7280` |

---

## ⚙️ Tech Stack

- **Frontend:** React, Tailwind CSS
- **Chat Engine:** Mock NLP with LangChain-like interfaces
- **Design:** Messaging UI, cards, icons, transitions
- **Animations:** Typing indicators, message loading states
- **Deployment:** Fully responsive, works across all devices

---

## Project Structure
```
/src
  ├── components/        # UI components (chat, event cards, etc.)
  ├── pages/             # Main page (chat interface)
  ├── services/          # Mock LangChain NLP logic
  ├── data/              # Mock event data
  ├── utils/             # Helper functions
  └── assets/            # Icons and visuals

```
---
## DEMO

![Homepage Screenshot](https://github.com/Piyush972004/Event-Buddy-MVP---LLM-Event-Recommendation-Chat/blob/962c5dae66bb42bac88de4f8648463f8c69ae824/public/Screenshot%202025-05-13%20205945.png)

![Homepage Screenshot](https://github.com/Piyush972004/Event-Buddy-MVP---LLM-Event-Recommendation-Chat/blob/962c5dae66bb42bac88de4f8648463f8c69ae824/public/Screenshot%202025-05-13%20205956.png)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/event-buddy-mvp.git
cd event-buddy-mvp
