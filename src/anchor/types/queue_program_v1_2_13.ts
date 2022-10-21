export type QueueProgram = {
  "version": "1.2.13",
  "name": "queue_program",
  "instructions": [
    {
      "name": "queueCrank",
      "accounts": [
        {
          "name": "fee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "penalty",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signatory",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "worker",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "queueCreate",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "kickoffInstruction",
          "type": {
            "defined": "clockwork_utils::InstructionData"
          }
        },
        {
          "name": "trigger",
          "type": {
            "defined": "Trigger"
          }
        }
      ]
    },
    {
      "name": "queueDelete",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "closeTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "queueKickoff",
      "accounts": [
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signatory",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "worker",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "dataHash",
          "type": {
            "option": "u64"
          }
        }
      ]
    },
    {
      "name": "queuePause",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "queueResume",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "queueStop",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "queueUpdate",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "settings",
          "type": {
            "defined": "QueueSettings"
          }
        }
      ]
    },
    {
      "name": "queueWithdraw",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "queue",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "createdAt",
            "type": {
              "defined": "ClockData"
            }
          },
          {
            "name": "execContext",
            "type": {
              "option": {
                "defined": "ExecContext"
              }
            }
          },
          {
            "name": "fee",
            "type": "u64"
          },
          {
            "name": "id",
            "type": "string"
          },
          {
            "name": "kickoffInstruction",
            "type": {
              "defined": "InstructionData"
            }
          },
          {
            "name": "nextInstruction",
            "type": {
              "option": {
                "defined": "InstructionData"
              }
            }
          },
          {
            "name": "paused",
            "type": "bool"
          },
          {
            "name": "rateLimit",
            "type": "u64"
          },
          {
            "name": "trigger",
            "type": {
              "defined": "Trigger"
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "QueueSettings",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fee",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "kickoffInstruction",
            "type": {
              "option": {
                "defined": "InstructionData"
              }
            }
          },
          {
            "name": "rateLimit",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "trigger",
            "type": {
              "option": {
                "defined": "Trigger"
              }
            }
          }
        ]
      }
    },
    {
      "name": "ExecContext",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "cranksSinceReimbursement",
            "type": "u64"
          },
          {
            "name": "cranksSinceSlot",
            "type": "u64"
          },
          {
            "name": "lastCrankAt",
            "type": "u64"
          },
          {
            "name": "triggerContext",
            "type": {
              "defined": "TriggerContext"
            }
          }
        ]
      }
    },
    {
      "name": "ClockData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "slot",
            "type": "u64"
          },
          {
            "name": "epochStartTimestamp",
            "type": "i64"
          },
          {
            "name": "epoch",
            "type": "u64"
          },
          {
            "name": "leaderScheduleEpoch",
            "type": "u64"
          },
          {
            "name": "unixTimestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "CrankResponse",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "kickoffInstruction",
            "type": {
              "option": {
                "defined": "InstructionData"
              }
            }
          },
          {
            "name": "nextInstruction",
            "type": {
              "option": {
                "defined": "InstructionData"
              }
            }
          }
        ]
      }
    },
    {
      "name": "InstructionData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "programId",
            "type": "publicKey"
          },
          {
            "name": "accounts",
            "type": {
              "vec": {
                "defined": "AccountMetaData"
              }
            }
          },
          {
            "name": "data",
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "AccountMetaData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pubkey",
            "type": "publicKey"
          },
          {
            "name": "isSigner",
            "type": "bool"
          },
          {
            "name": "isWritable",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "Trigger",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Account",
            "fields": [
              {
                "name": "pubkey",
                "type": "publicKey"
              }
            ]
          },
          {
            "name": "Cron",
            "fields": [
              {
                "name": "schedule",
                "type": "string"
              },
              {
                "name": "skippable",
                "type": "bool"
              }
            ]
          },
          {
            "name": "Immediate"
          }
        ]
      }
    },
    {
      "name": "TriggerContext",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Account",
            "fields": [
              {
                "name": "data_hash",
                "type": "u64"
              }
            ]
          },
          {
            "name": "Cron",
            "fields": [
              {
                "name": "started_at",
                "type": "i64"
              }
            ]
          },
          {
            "name": "Immediate"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "DataHashNotPresent",
      "msg": "This trigger requires a data hash observation"
    },
    {
      "code": 6001,
      "name": "InvalidCrankResponse",
      "msg": "The crank response could not be parsed"
    },
    {
      "code": 6002,
      "name": "InvalidQueueState",
      "msg": "The queue is in an invalid state"
    },
    {
      "code": 6003,
      "name": "TriggerNotActive",
      "msg": "The trigger condition has not been activated"
    },
    {
      "code": 6004,
      "name": "QueueBusy",
      "msg": "This operation cannot be processes because the queue is currently busy"
    },
    {
      "code": 6005,
      "name": "QueuePaused",
      "msg": "The queue is currently paused"
    },
    {
      "code": 6006,
      "name": "RateLimitExeceeded",
      "msg": "The queue's rate limit has been reached"
    },
    {
      "code": 6007,
      "name": "MaxRateLimitExceeded",
      "msg": "Queue rate limits cannot exceed the maximum allowed value"
    },
    {
      "code": 6008,
      "name": "UnauthorizedWrite",
      "msg": "Inner instruction attempted to write to an unauthorized address"
    }
  ]
};

export const IDL: QueueProgram = {
  "version": "1.2.13",
  "name": "queue_program",
  "instructions": [
    {
      "name": "queueCrank",
      "accounts": [
        {
          "name": "fee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "penalty",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signatory",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "worker",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "queueCreate",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "id",
          "type": "string"
        },
        {
          "name": "kickoffInstruction",
          "type": {
            "defined": "clockwork_utils::InstructionData"
          }
        },
        {
          "name": "trigger",
          "type": {
            "defined": "Trigger"
          }
        }
      ]
    },
    {
      "name": "queueDelete",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "closeTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "queueKickoff",
      "accounts": [
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signatory",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "worker",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "dataHash",
          "type": {
            "option": "u64"
          }
        }
      ]
    },
    {
      "name": "queuePause",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "queueResume",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "queueStop",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "queueUpdate",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "settings",
          "type": {
            "defined": "QueueSettings"
          }
        }
      ]
    },
    {
      "name": "queueWithdraw",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "queue",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "createdAt",
            "type": {
              "defined": "ClockData"
            }
          },
          {
            "name": "execContext",
            "type": {
              "option": {
                "defined": "ExecContext"
              }
            }
          },
          {
            "name": "fee",
            "type": "u64"
          },
          {
            "name": "id",
            "type": "string"
          },
          {
            "name": "kickoffInstruction",
            "type": {
              "defined": "InstructionData"
            }
          },
          {
            "name": "nextInstruction",
            "type": {
              "option": {
                "defined": "InstructionData"
              }
            }
          },
          {
            "name": "paused",
            "type": "bool"
          },
          {
            "name": "rateLimit",
            "type": "u64"
          },
          {
            "name": "trigger",
            "type": {
              "defined": "Trigger"
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "QueueSettings",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "fee",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "kickoffInstruction",
            "type": {
              "option": {
                "defined": "InstructionData"
              }
            }
          },
          {
            "name": "rateLimit",
            "type": {
              "option": "u64"
            }
          },
          {
            "name": "trigger",
            "type": {
              "option": {
                "defined": "Trigger"
              }
            }
          }
        ]
      }
    },
    {
      "name": "ExecContext",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "cranksSinceReimbursement",
            "type": "u64"
          },
          {
            "name": "cranksSinceSlot",
            "type": "u64"
          },
          {
            "name": "lastCrankAt",
            "type": "u64"
          },
          {
            "name": "triggerContext",
            "type": {
              "defined": "TriggerContext"
            }
          }
        ]
      }
    },
    {
      "name": "ClockData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "slot",
            "type": "u64"
          },
          {
            "name": "epochStartTimestamp",
            "type": "i64"
          },
          {
            "name": "epoch",
            "type": "u64"
          },
          {
            "name": "leaderScheduleEpoch",
            "type": "u64"
          },
          {
            "name": "unixTimestamp",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "CrankResponse",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "kickoffInstruction",
            "type": {
              "option": {
                "defined": "InstructionData"
              }
            }
          },
          {
            "name": "nextInstruction",
            "type": {
              "option": {
                "defined": "InstructionData"
              }
            }
          }
        ]
      }
    },
    {
      "name": "InstructionData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "programId",
            "type": "publicKey"
          },
          {
            "name": "accounts",
            "type": {
              "vec": {
                "defined": "AccountMetaData"
              }
            }
          },
          {
            "name": "data",
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "AccountMetaData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pubkey",
            "type": "publicKey"
          },
          {
            "name": "isSigner",
            "type": "bool"
          },
          {
            "name": "isWritable",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "Trigger",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Account",
            "fields": [
              {
                "name": "pubkey",
                "type": "publicKey"
              }
            ]
          },
          {
            "name": "Cron",
            "fields": [
              {
                "name": "schedule",
                "type": "string"
              },
              {
                "name": "skippable",
                "type": "bool"
              }
            ]
          },
          {
            "name": "Immediate"
          }
        ]
      }
    },
    {
      "name": "TriggerContext",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Account",
            "fields": [
              {
                "name": "data_hash",
                "type": "u64"
              }
            ]
          },
          {
            "name": "Cron",
            "fields": [
              {
                "name": "started_at",
                "type": "i64"
              }
            ]
          },
          {
            "name": "Immediate"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "DataHashNotPresent",
      "msg": "This trigger requires a data hash observation"
    },
    {
      "code": 6001,
      "name": "InvalidCrankResponse",
      "msg": "The crank response could not be parsed"
    },
    {
      "code": 6002,
      "name": "InvalidQueueState",
      "msg": "The queue is in an invalid state"
    },
    {
      "code": 6003,
      "name": "TriggerNotActive",
      "msg": "The trigger condition has not been activated"
    },
    {
      "code": 6004,
      "name": "QueueBusy",
      "msg": "This operation cannot be processes because the queue is currently busy"
    },
    {
      "code": 6005,
      "name": "QueuePaused",
      "msg": "The queue is currently paused"
    },
    {
      "code": 6006,
      "name": "RateLimitExeceeded",
      "msg": "The queue's rate limit has been reached"
    },
    {
      "code": 6007,
      "name": "MaxRateLimitExceeded",
      "msg": "Queue rate limits cannot exceed the maximum allowed value"
    },
    {
      "code": 6008,
      "name": "UnauthorizedWrite",
      "msg": "Inner instruction attempted to write to an unauthorized address"
    }
  ]
};
