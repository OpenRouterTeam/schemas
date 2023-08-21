# OpenRouter - Model Router JSON Schema

This is the JSON schema used to configure OpenRouter's dynamic model routing. Features:

🔀 Configure fallback models to handle moderation and downtime gracefully
🦹‍♀️ Create and share characters with custom prompts and parameters

WIP features:

🧠 Add memory to characters using embeddings (WIP)
👨‍👩‍👧‍👦 Configure a [mixture-of-experts](https://arxiv.org/abs/2208.02813) with open source models (WIP)

## How to use this

The current RFC draft schema is `v1`. To start your router, create a JSON file with:

```json
{
  "$schema": "https://openrouter.ai/api/v1/router/schema.json"
}
```

We're looking for feedback and suggestions. Please feel free to [create an issue](/issues) or open a PR directly on this repository to start the discussion!

## v1 Schema
