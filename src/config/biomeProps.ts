export const biomePackages = ["@biomejs/biome"].join(" ");

export const biomeFile = `{
  "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
  "vcs": {
    "enabled": false,
    "clientKind": "git",
    "useIgnoreFile": false
  },
  "files": {
    "ignoreUnknown": false,
    "ignore": []
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2
  },
  "organizeImports": {
    "enabled": true
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "correctness": {
        "useExhaustiveDependencies": "warn",
        "noUnusedImports": "error",
        "useHookAtTopLevel": "error"
      }
    }
  },

  "javascript": {
    "formatter": {
      "quoteStyle": "double"
    }
  }
}
`;