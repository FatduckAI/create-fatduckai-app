# create-fatduck-app

![duck_banner](https://github.com/user-attachments/assets/33c039c6-bd6a-436f-952e-fbc88ae07c50)

_An opinionated framework for building terminally online agentic apps._

## 🚀 Quick Start

```bash
# Using npm
npx create-fatduck-app my-ai-app

# Using bun
bunx create-fatduck-app my-ai-app
```

## 📦 What's Included

The template sets up a complete AI application environment with:

- Twitter integration for AI-powered tweets
- Telegram bot support
- GitHub integration
- Environment configuration
- TypeScript support out of the box

## 🛠️ Setup Steps

### 1. Installation

```bash
# Create a new FatDuck app
clone this repo

# Navigate to your project
cd my-ai-app

# Install dependencies
npm install
# or
bun install
```

### 2. Add Integrations

```bash

# Add Twitter integration
fatduckai add tweet

# Add Telegram bot
fatduckai add telegram

# These commands will create the necessary files and configurations
```

### 3. Configure Environment Variables

Create a `.env` file in your project root:

```env

# Telegram Configuration (added by fatduckai add telegram)
TELEGRAM_BOT_TOKEN=your_telegram_bot_token
OPENAI_API_KEY=your_openai_api_key
```

### 4. Run:

```bash
# To Run
npm run start

or

bun ./src/index.ts

```

## 📁 Project Structure

```
create-fatduckai-app/
├── .env
├── ai/
│   ├── prompts/
│   │   └── tweet.ts
│   └── tools/
│       └── btc-price.ts
├── src/
│   ├── clients/
│   │   └── telegram/
├── package.json
└── tsconfig.json
```

## 🔧 Configuration

### Twitter Setup

After adding the Twitter integration:

1. Set up your Twitter Developer account
2. Create a new app in the Twitter Developer Portal
3. Generate API keys and tokens
4. Add them to your `.env` file

### Telegram Setup

After adding the Telegram integration:

1. Create a new bot via BotFather
2. Get your bot token
3. Add it to your `.env` file

### GitHub Integration

1. Generate a GitHub Personal Access Token
2. Add it to your `.env` file as `GITHUB_TOKEN`

## 📝 Usage Examples

## 🚀 Development

```bash
# Run in development mode
npm run dev
# or
bun run dev

# Build for production
npm run build
# or
bun run build

# Start production server
npm start
# or
bun start
```

## 📚 Additional Resources

- [FatDuck AI Documentation](https://docs.fatduck.ai)
- [Twitter API Documentation](https://developer.twitter.com/en/docs)
- [Telegram Bot API](https://core.telegram.org/bots/api)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
