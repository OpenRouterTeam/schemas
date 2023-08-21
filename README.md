# OpenRouter - Model Router JSON Schema

This is the JSON schema for the model router. It is used to configure OpenRouter's dynamic routing. It enables developer to re-route LLM inference request across layers of models.

The current RFC draft schema is `v1`. To start your router, create a JSON file with:

```json
{
  "$schema": "https://openrouter.ai/api/v1/router/schema.json"
}
```

We're looking for feedbacks and suggestions. Please feel free to open a PR directly at the schema file to start the discussion!

## v1 Schema
