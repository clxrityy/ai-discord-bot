# ai-discord-bot template

```zsh
git clone https://github.com/clxrityy/ai-discord-bot
```

```zsh
pnpm install
```

---


## configuration

#### [`config.ts`](/src/config.ts)

```ts
/*
    Your default AI settings
*/
    openai: {
        model: /** 
            https://platform.openai.com/docs/models
        */ ,
        systemRoleContent: /**
            https://platform.openai.com/docs/guides/text-generation/chat-completions-api
        */,
        temperature: /**
            https://platform.openai.com/docs/guides/text-generation/how-should-i-set-the-temperature-parameter
        */,
        presence_penalty: /** 
            https://platform.openai.com/docs/guides/text-generation/parameter-details
        */,
    }
```

#### [`.env`](/.env.example)
```env
# DISCORD
BOT_TOKEN=

# OPENAI
OPENAI_API_KEY=
OPENAI_ORGANIZATION_ID=

# MONOGDB
MONGO_URI=
```

---

```zsh
pnpm run dev
```

---

## commands

- `/ai` **`[prompt]`**
- `/settings`
    - `config`
        -  [model](https://platform.openai.com/docs/models)
        -  [precense_penalty](https://platform.openai.com/docs/guides/text-generation/parameter-details)
        -  [role](https://platform.openai.com/docs/guides/text-generation/chat-completions-api)
        -  [temperature](https://platform.openai.com/docs/guides/text-generation/how-should-i-set-the-temperature-parameter)
    - `view`
    - `reset`
    - `help`