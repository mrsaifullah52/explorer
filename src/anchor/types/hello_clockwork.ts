export type HelloClockwork = {
  "version": "0.1.0",
  "name": "hello_clockwork",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clockworkProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "helloQueue",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "helloWorld",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "helloQueue",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [],
      "returns": {
        "defined": "clockwork_sdk::queue_program::accounts::CrankResponse"
      }
    }
  ],
  "accounts": [
    {
      "name": "authority",
      "docs": [
        "* Authority"
      ],
      "type": {
        "kind": "struct",
        "fields": []
      }
    }
  ]
};

export const IDL: HelloClockwork = {
  "version": "0.1.0",
  "name": "hello_clockwork",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clockworkProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "helloQueue",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "helloWorld",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "helloQueue",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [],
      "returns": {
        "defined": "clockwork_sdk::queue_program::accounts::CrankResponse"
      }
    }
  ],
  "accounts": [
    {
      "name": "authority",
      "docs": [
        "* Authority"
      ],
      "type": {
        "kind": "struct",
        "fields": []
      }
    }
  ]
};
