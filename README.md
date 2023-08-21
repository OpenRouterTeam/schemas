# OpenRouter Schemas

This is the JSON schema used to configure OpenRouter's dynamic model routing. Features:

- 🔀 Configure fallback models to handle moderation and downtime gracefully
- 🦹‍♀️ Create and share characters with custom prompts and parameters

WIP features:

- 🧠 Add memory to characters using embeddings (WIP)
- 👨‍👩‍👧‍👦 Configure a [mixture-of-experts](https://arxiv.org/abs/2208.02813) with open source models (WIP)

## How to configure a route

OpenRouter will provide two ways to set a route:
### Fallback route

In the request body to the [OpenRouter API](https://openrouter.ai/docs), you can set `route` to a string value. Only one option will exist at the beginning: `"fallback"`:

```json
{
  "model": "openai/gpt-4",
  "route": "fallback"
}
```

This route allows you to use an **open source model** (whatever OpenRouter thinks might be best for your primary model) as a fallback if:

1. Your primary model requires the use of a moderation model to avoid sending certain types of prompts
2. Our moderation model(s) flagged your prompt or system prompt for a specific reason.

You can also use list of `models` to indicate which models you'd like to try, in order (up to 3):

```json
{
  "models": ["openai/gpt-4", "meta-llama/llama-2-70b-chat"],
  "route": "fallback"
}
```

If you don't specify `models` but you do specify `route: "fallback"`, then OpenRouter will try to pick the most appropriate fallback model for you.

### Custom JSON

You will also be able set `route` to a JSON object that conforms to this schema. See [How to use this](#how-to-use-this) below.

## How to use this

The current RFC draft schema is `v1`. To start your router, create a JSON file with:

```json
{
  "$schema": "https://openrouter.ai/api/v1/router/schema.json"
}
```

You can then extend the schema and submit this JSON as your `route`. [Here's an example](/examples/v1-fallback-router.json).

**Note:** You should submit a single model config inside the `models` array unless you also want a `mixture_of_experts`. If the latter is unspecified and `models.length > 1`, you'll receive an error.

### When will this be available?

Custom routers will go live after we receive feedback and suggestions. Please feel free to create an issue or open a PR directly on this repository to start the discussion!

You can also message us in [Discord](https://discord.gg/T7cXxR68vK).

## Model identifiers

Models must be identified by one of the `/`-separated strings in the [OpenRouter docs](https://openrouter.ai/docs#models), or a model identifier in Hugging Face format.
