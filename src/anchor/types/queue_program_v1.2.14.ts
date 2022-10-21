export type QueueProgram = {
  "version": "1.2.14",
  "name": "queue_program",
  "docs": [
    "Program for creating transaction queues on Solana."
  ],
  "instructions": [
    {
      "name": "queueCrank",
      "docs": [
        "Cranks a transaction queue."
      ],
      "accounts": [
        {
          "name": "fee",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The worker's fee account."
          ]
        },
        {
          "name": "penalty",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The worker's penalty account."
          ]
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The active worker pool."
          ]
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The queue to crank."
          ]
        },
        {
          "name": "signatory",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "The signatory."
          ]
        },
        {
          "name": "worker",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The worker."
          ]
        }
      ],
      "args": []
    },
    {
      "name": "queueCreate",
      "docs": [
        "Creates a new transaction queue."
      ],
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The authority (owner) of the queue."
          ]
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "The payer for account initializations."
          ]
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The queue to be created."
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The Solana system program."
          ]
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
            "defined": "InstructionData"
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
      "docs": [
        "Closes an existing queue account and returns the lamports to the owner."
      ],
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The authority (owner) of the queue."
          ]
        },
        {
          "name": "closeTo",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The address to return the data rent lamports to."
          ]
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The queue to be delete."
          ]
        }
      ],
      "args": []
    },
    {
      "name": "queueKickoff",
      "docs": [
        "Kicks off a queue if its trigger condition is active."
      ],
      "accounts": [
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The queue to crank."
          ]
        },
        {
          "name": "signatory",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "The signatory."
          ]
        },
        {
          "name": "worker",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The worker."
          ]
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
      "docs": [
        "Pauses an active queue."
      ],
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The authority (owner) of the queue."
          ]
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The queue to be paused."
          ]
        }
      ],
      "args": []
    },
    {
      "name": "queueResume",
      "docs": [
        "Resumes a paused queue."
      ],
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The authority (owner) of the queue."
          ]
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The queue to be resumed."
          ]
        }
      ],
      "args": []
    },
    {
      "name": "queueStop",
      "docs": [
        "Resumes a paused queue."
      ],
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The authority (owner) of the queue."
          ]
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The queue to be paused."
          ]
        }
      ],
      "args": []
    },
    {
      "name": "queueUpdate",
      "docs": [
        "Allows an owner to update the mutable properties of a queue."
      ],
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "The authority (owner) of the queue."
          ]
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The queue to be updated."
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The Solana system program"
          ]
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
      "docs": [
        "Allows an owner to withdraw from a queue's lamport balance."
      ],
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The authority (owner) of the queue."
          ]
        },
        {
          "name": "payTo",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The account to withdraw lamports to."
          ]
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The queue to be."
          ]
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
      "docs": [
        "Tracks the current state of a transaction thread on Solana."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "docs": [
              "The owner of this queue."
            ],
            "type": "publicKey"
          },
          {
            "name": "createdAt",
            "docs": [
              "The cluster clock at the moment the queue was created."
            ],
            "type": {
              "defined": "ClockData"
            }
          },
          {
            "name": "execContext",
            "docs": [
              "The context of the current thread execution state."
            ],
            "type": {
              "option": {
                "defined": "ExecContext"
              }
            }
          },
          {
            "name": "fee",
            "docs": [
              "The number of lamports to payout to workers per crank."
            ],
            "type": "u64"
          },
          {
            "name": "id",
            "docs": [
              "The id of the queue, given by the authority."
            ],
            "type": "string"
          },
          {
            "name": "kickoffInstruction",
            "docs": [
              "The instruction to kick-off the thread."
            ],
            "type": {
              "defined": "InstructionData"
            }
          },
          {
            "name": "nextInstruction",
            "docs": [
              "The next instruction in the thread."
            ],
            "type": {
              "option": {
                "defined": "InstructionData"
              }
            }
          },
          {
            "name": "paused",
            "docs": [
              "Whether or not the queue is currently paused."
            ],
            "type": "bool"
          },
          {
            "name": "rateLimit",
            "docs": [
              "The maximum number of cranks allowed per slot."
            ],
            "type": "u64"
          },
          {
            "name": "trigger",
            "docs": [
              "The triggering event to kickoff a thread."
            ],
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
      "docs": [
        "The properties of queues which are updatable."
      ],
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
      "docs": [
        "The execution context of a particular transaction thread."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "cranksSinceReimbursement",
            "docs": [
              "Number of cranks since the last tx reimbursement."
            ],
            "type": "u64"
          },
          {
            "name": "cranksSinceSlot",
            "docs": [
              "Number of cranks in this slot."
            ],
            "type": "u64"
          },
          {
            "name": "lastCrankAt",
            "docs": [
              "Slot of the last crank"
            ],
            "type": "u64"
          },
          {
            "name": "triggerContext",
            "docs": [
              "Context for the triggering condition"
            ],
            "type": {
              "defined": "TriggerContext"
            }
          }
        ]
      }
    },
    {
      "name": "ClockData",
      "docs": [
        "The clock object, representing a specific moment in time recorded by a Solana cluster."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "slot",
            "docs": [
              "The current slot."
            ],
            "type": "u64"
          },
          {
            "name": "epochStartTimestamp",
            "docs": [
              "The timestamp of the first slot in this Solana epoch."
            ],
            "type": "i64"
          },
          {
            "name": "epoch",
            "docs": [
              "The bank epoch."
            ],
            "type": "u64"
          },
          {
            "name": "leaderScheduleEpoch",
            "docs": [
              "The future epoch for which the leader schedule has most recently been calculated."
            ],
            "type": "u64"
          },
          {
            "name": "unixTimestamp",
            "docs": [
              "Originally computed from genesis creation time and network time",
              "in slots (drifty); corrected using validator timestamp oracle as of",
              "timestamp_correction and timestamp_bounding features."
            ],
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "CrankResponse",
      "docs": [
        "A response value target programs can return to update the queue."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "kickoffInstruction",
            "docs": [
              "The kickoff instruction to use on the next triggering of the queue.",
              "If none, the kickoff instruction remains unchanged."
            ],
            "type": {
              "option": {
                "defined": "InstructionData"
              }
            }
          },
          {
            "name": "nextInstruction",
            "docs": [
              "The next instruction to use on the next crank of the queue."
            ],
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
      "docs": [
        "The data needed execute an instruction on Solana."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "programId",
            "docs": [
              "Pubkey of the instruction processor that executes this instruction"
            ],
            "type": "publicKey"
          },
          {
            "name": "accounts",
            "docs": [
              "Metadata for what accounts should be passed to the instruction processor"
            ],
            "type": {
              "vec": {
                "defined": "AccountMetaData"
              }
            }
          },
          {
            "name": "data",
            "docs": [
              "Opaque data passed to the instruction processor"
            ],
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "AccountMetaData",
      "docs": [
        "Account metadata needed to execute an instruction on Solana."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pubkey",
            "docs": [
              "An account's public key"
            ],
            "type": "publicKey"
          },
          {
            "name": "isSigner",
            "docs": [
              "True if an Instruction requires a Transaction signature matching `pubkey`."
            ],
            "type": "bool"
          },
          {
            "name": "isWritable",
            "docs": [
              "True if the `pubkey` can be loaded as a read-write account."
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "Trigger",
      "docs": [
        "The triggering conditions of a queue."
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Account",
            "fields": [
              {
                "name": "pubkey",
                "docs": [
                  "The address of the account to subscribe to."
                ],
                "type": "publicKey"
              }
            ]
          },
          {
            "name": "Cron",
            "fields": [
              {
                "name": "schedule",
                "docs": [
                  "The schedule in cron syntax. Value must be parsable by the `clockwork_cron` package."
                ],
                "type": "string"
              },
              {
                "name": "skippable",
                "docs": [
                  "Boolean value indicating whether triggering moments may be skipped if they are missed (e.g. due to network downtime).",
                  "If false, any \"missed\" triggering moments will simply be cranked as soon as the network comes back online."
                ],
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
      "docs": [
        "The event which allowed a particular transaction thread to be triggered."
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Account",
            "fields": [
              {
                "name": "data_hash",
                "docs": [
                  "The account's data hash."
                ],
                "type": "u64"
              }
            ]
          },
          {
            "name": "Cron",
            "fields": [
              {
                "name": "started_at",
                "docs": [
                  "The threshold moment the schedule was waiting for."
                ],
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
  "version": "1.2.14",
  "name": "queue_program",
  "docs": [
    "Program for creating transaction queues on Solana."
  ],
  "instructions": [
    {
      "name": "queueCrank",
      "docs": [
        "Cranks a transaction queue."
      ],
      "accounts": [
        {
          "name": "fee",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The worker's fee account."
          ]
        },
        {
          "name": "penalty",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The worker's penalty account."
          ]
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The active worker pool."
          ]
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The queue to crank."
          ]
        },
        {
          "name": "signatory",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "The signatory."
          ]
        },
        {
          "name": "worker",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The worker."
          ]
        }
      ],
      "args": []
    },
    {
      "name": "queueCreate",
      "docs": [
        "Creates a new transaction queue."
      ],
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The authority (owner) of the queue."
          ]
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "The payer for account initializations."
          ]
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The queue to be created."
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The Solana system program."
          ]
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
            "defined": "InstructionData"
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
      "docs": [
        "Closes an existing queue account and returns the lamports to the owner."
      ],
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The authority (owner) of the queue."
          ]
        },
        {
          "name": "closeTo",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The address to return the data rent lamports to."
          ]
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The queue to be delete."
          ]
        }
      ],
      "args": []
    },
    {
      "name": "queueKickoff",
      "docs": [
        "Kicks off a queue if its trigger condition is active."
      ],
      "accounts": [
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The queue to crank."
          ]
        },
        {
          "name": "signatory",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "The signatory."
          ]
        },
        {
          "name": "worker",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The worker."
          ]
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
      "docs": [
        "Pauses an active queue."
      ],
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The authority (owner) of the queue."
          ]
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The queue to be paused."
          ]
        }
      ],
      "args": []
    },
    {
      "name": "queueResume",
      "docs": [
        "Resumes a paused queue."
      ],
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The authority (owner) of the queue."
          ]
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The queue to be resumed."
          ]
        }
      ],
      "args": []
    },
    {
      "name": "queueStop",
      "docs": [
        "Resumes a paused queue."
      ],
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The authority (owner) of the queue."
          ]
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The queue to be paused."
          ]
        }
      ],
      "args": []
    },
    {
      "name": "queueUpdate",
      "docs": [
        "Allows an owner to update the mutable properties of a queue."
      ],
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "The authority (owner) of the queue."
          ]
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The queue to be updated."
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "The Solana system program"
          ]
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
      "docs": [
        "Allows an owner to withdraw from a queue's lamport balance."
      ],
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "The authority (owner) of the queue."
          ]
        },
        {
          "name": "payTo",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The account to withdraw lamports to."
          ]
        },
        {
          "name": "queue",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "The queue to be."
          ]
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
      "docs": [
        "Tracks the current state of a transaction thread on Solana."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "docs": [
              "The owner of this queue."
            ],
            "type": "publicKey"
          },
          {
            "name": "createdAt",
            "docs": [
              "The cluster clock at the moment the queue was created."
            ],
            "type": {
              "defined": "ClockData"
            }
          },
          {
            "name": "execContext",
            "docs": [
              "The context of the current thread execution state."
            ],
            "type": {
              "option": {
                "defined": "ExecContext"
              }
            }
          },
          {
            "name": "fee",
            "docs": [
              "The number of lamports to payout to workers per crank."
            ],
            "type": "u64"
          },
          {
            "name": "id",
            "docs": [
              "The id of the queue, given by the authority."
            ],
            "type": "string"
          },
          {
            "name": "kickoffInstruction",
            "docs": [
              "The instruction to kick-off the thread."
            ],
            "type": {
              "defined": "InstructionData"
            }
          },
          {
            "name": "nextInstruction",
            "docs": [
              "The next instruction in the thread."
            ],
            "type": {
              "option": {
                "defined": "InstructionData"
              }
            }
          },
          {
            "name": "paused",
            "docs": [
              "Whether or not the queue is currently paused."
            ],
            "type": "bool"
          },
          {
            "name": "rateLimit",
            "docs": [
              "The maximum number of cranks allowed per slot."
            ],
            "type": "u64"
          },
          {
            "name": "trigger",
            "docs": [
              "The triggering event to kickoff a thread."
            ],
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
      "docs": [
        "The properties of queues which are updatable."
      ],
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
      "docs": [
        "The execution context of a particular transaction thread."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "cranksSinceReimbursement",
            "docs": [
              "Number of cranks since the last tx reimbursement."
            ],
            "type": "u64"
          },
          {
            "name": "cranksSinceSlot",
            "docs": [
              "Number of cranks in this slot."
            ],
            "type": "u64"
          },
          {
            "name": "lastCrankAt",
            "docs": [
              "Slot of the last crank"
            ],
            "type": "u64"
          },
          {
            "name": "triggerContext",
            "docs": [
              "Context for the triggering condition"
            ],
            "type": {
              "defined": "TriggerContext"
            }
          }
        ]
      }
    },
    {
      "name": "ClockData",
      "docs": [
        "The clock object, representing a specific moment in time recorded by a Solana cluster."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "slot",
            "docs": [
              "The current slot."
            ],
            "type": "u64"
          },
          {
            "name": "epochStartTimestamp",
            "docs": [
              "The timestamp of the first slot in this Solana epoch."
            ],
            "type": "i64"
          },
          {
            "name": "epoch",
            "docs": [
              "The bank epoch."
            ],
            "type": "u64"
          },
          {
            "name": "leaderScheduleEpoch",
            "docs": [
              "The future epoch for which the leader schedule has most recently been calculated."
            ],
            "type": "u64"
          },
          {
            "name": "unixTimestamp",
            "docs": [
              "Originally computed from genesis creation time and network time",
              "in slots (drifty); corrected using validator timestamp oracle as of",
              "timestamp_correction and timestamp_bounding features."
            ],
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "CrankResponse",
      "docs": [
        "A response value target programs can return to update the queue."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "kickoffInstruction",
            "docs": [
              "The kickoff instruction to use on the next triggering of the queue.",
              "If none, the kickoff instruction remains unchanged."
            ],
            "type": {
              "option": {
                "defined": "InstructionData"
              }
            }
          },
          {
            "name": "nextInstruction",
            "docs": [
              "The next instruction to use on the next crank of the queue."
            ],
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
      "docs": [
        "The data needed execute an instruction on Solana."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "programId",
            "docs": [
              "Pubkey of the instruction processor that executes this instruction"
            ],
            "type": "publicKey"
          },
          {
            "name": "accounts",
            "docs": [
              "Metadata for what accounts should be passed to the instruction processor"
            ],
            "type": {
              "vec": {
                "defined": "AccountMetaData"
              }
            }
          },
          {
            "name": "data",
            "docs": [
              "Opaque data passed to the instruction processor"
            ],
            "type": "bytes"
          }
        ]
      }
    },
    {
      "name": "AccountMetaData",
      "docs": [
        "Account metadata needed to execute an instruction on Solana."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pubkey",
            "docs": [
              "An account's public key"
            ],
            "type": "publicKey"
          },
          {
            "name": "isSigner",
            "docs": [
              "True if an Instruction requires a Transaction signature matching `pubkey`."
            ],
            "type": "bool"
          },
          {
            "name": "isWritable",
            "docs": [
              "True if the `pubkey` can be loaded as a read-write account."
            ],
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "Trigger",
      "docs": [
        "The triggering conditions of a queue."
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Account",
            "fields": [
              {
                "name": "pubkey",
                "docs": [
                  "The address of the account to subscribe to."
                ],
                "type": "publicKey"
              }
            ]
          },
          {
            "name": "Cron",
            "fields": [
              {
                "name": "schedule",
                "docs": [
                  "The schedule in cron syntax. Value must be parsable by the `clockwork_cron` package."
                ],
                "type": "string"
              },
              {
                "name": "skippable",
                "docs": [
                  "Boolean value indicating whether triggering moments may be skipped if they are missed (e.g. due to network downtime).",
                  "If false, any \"missed\" triggering moments will simply be cranked as soon as the network comes back online."
                ],
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
      "docs": [
        "The event which allowed a particular transaction thread to be triggered."
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Account",
            "fields": [
              {
                "name": "data_hash",
                "docs": [
                  "The account's data hash."
                ],
                "type": "u64"
              }
            ]
          },
          {
            "name": "Cron",
            "fields": [
              {
                "name": "started_at",
                "docs": [
                  "The threshold moment the schedule was waiting for."
                ],
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
