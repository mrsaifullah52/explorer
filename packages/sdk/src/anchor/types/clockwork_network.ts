export type ClockworkNetwork = {
  version: "1.0.3";
  name: "clockwork_network";
  instructions: [
    {
      name: "entryClose";
      accounts: [
        {
          name: "authority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "entry";
          isMut: true;
          isSigner: false;
        },
        {
          name: "snapshot";
          isMut: true;
          isSigner: false;
        },
        {
          name: "snapshotQueue";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [];
      returns: {
        defined: "CrankResponse";
      };
    },
    {
      name: "entryCreate";
      accounts: [
        {
          name: "authority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "config";
          isMut: false;
          isSigner: false;
        },
        {
          name: "entry";
          isMut: true;
          isSigner: false;
        },
        {
          name: "node";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "registry";
          isMut: false;
          isSigner: false;
        },
        {
          name: "snapshot";
          isMut: true;
          isSigner: false;
        },
        {
          name: "snapshotQueue";
          isMut: false;
          isSigner: true;
        },
        {
          name: "stake";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
      returns: {
        defined: "CrankResponse";
      };
    },
    {
      name: "initialize";
      accounts: [
        {
          name: "admin";
          isMut: true;
          isSigner: true;
        },
        {
          name: "authority";
          isMut: true;
          isSigner: false;
        },
        {
          name: "clockworkProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "config";
          isMut: true;
          isSigner: false;
        },
        {
          name: "rotator";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "registry";
          isMut: true;
          isSigner: false;
        },
        {
          name: "snapshot";
          isMut: true;
          isSigner: false;
        },
        {
          name: "snapshotQueue";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "rotatorTurn";
      accounts: [
        {
          name: "config";
          isMut: false;
          isSigner: false;
        },
        {
          name: "entry";
          isMut: false;
          isSigner: false;
        },
        {
          name: "pool";
          isMut: true;
          isSigner: false;
        },
        {
          name: "poolConfig";
          isMut: false;
          isSigner: false;
        },
        {
          name: "poolProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rotator";
          isMut: true;
          isSigner: false;
        },
        {
          name: "signer";
          isMut: false;
          isSigner: true;
        },
        {
          name: "snapshot";
          isMut: false;
          isSigner: false;
        },
        {
          name: "worker";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "nodeRegister";
      accounts: [
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "config";
          isMut: false;
          isSigner: false;
        },
        {
          name: "entry";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "node";
          isMut: true;
          isSigner: false;
        },
        {
          name: "registry";
          isMut: true;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        },
        {
          name: "signer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "snapshot";
          isMut: true;
          isSigner: false;
        },
        {
          name: "stake";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "worker";
          isMut: false;
          isSigner: true;
        }
      ];
      args: [];
    },
    {
      name: "nodeStake";
      accounts: [
        {
          name: "config";
          isMut: false;
          isSigner: false;
        },
        {
          name: "node";
          isMut: false;
          isSigner: false;
        },
        {
          name: "nodeStake";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "signer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokens";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "amount";
          type: "u64";
        }
      ];
    },
    {
      name: "snapshotClose";
      accounts: [
        {
          name: "authority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "snapshot";
          isMut: true;
          isSigner: false;
        },
        {
          name: "snapshotQueue";
          isMut: false;
          isSigner: true;
        }
      ];
      args: [];
      returns: {
        defined: "CrankResponse";
      };
    },
    {
      name: "snapshotCreate";
      accounts: [
        {
          name: "authority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "config";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "registry";
          isMut: true;
          isSigner: false;
        },
        {
          name: "snapshot";
          isMut: true;
          isSigner: false;
        },
        {
          name: "snapshotQueue";
          isMut: false;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
      returns: {
        defined: "CrankResponse";
      };
    },
    {
      name: "snapshotKickoff";
      accounts: [
        {
          name: "authority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "registry";
          isMut: true;
          isSigner: false;
        },
        {
          name: "snapshotQueue";
          isMut: false;
          isSigner: true;
        }
      ];
      args: [];
      returns: {
        defined: "CrankResponse";
      };
    },
    {
      name: "snapshotPause";
      accounts: [
        {
          name: "admin";
          isMut: true;
          isSigner: true;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "clockworkProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "config";
          isMut: false;
          isSigner: false;
        },
        {
          name: "snapshotQueue";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "snapshotResume";
      accounts: [
        {
          name: "admin";
          isMut: true;
          isSigner: true;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "clockworkProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "config";
          isMut: false;
          isSigner: false;
        },
        {
          name: "snapshotQueue";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [];
    },
    {
      name: "snapshotRotate";
      accounts: [
        {
          name: "authority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "config";
          isMut: false;
          isSigner: false;
        },
        {
          name: "currentSnapshot";
          isMut: true;
          isSigner: false;
        },
        {
          name: "nextSnapshot";
          isMut: true;
          isSigner: false;
        },
        {
          name: "registry";
          isMut: true;
          isSigner: false;
        },
        {
          name: "snapshotQueue";
          isMut: false;
          isSigner: true;
        }
      ];
      args: [];
      returns: {
        defined: "CrankResponse";
      };
    }
  ];
  accounts: [
    {
      name: "authority";
      docs: ["* Authority"];
      type: {
        kind: "struct";
        fields: [];
      };
    },
    {
      name: "config";
      docs: ["* Config"];
      type: {
        kind: "struct";
        fields: [
          {
            name: "admin";
            type: "publicKey";
          },
          {
            name: "mint";
            type: "publicKey";
          },
          {
            name: "slotsPerRotation";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "node";
      docs: ["* Node"];
      type: {
        kind: "struct";
        fields: [
          {
            name: "authority";
            type: "publicKey";
          },
          {
            name: "id";
            type: "u64";
          },
          {
            name: "stake";
            type: "publicKey";
          },
          {
            name: "worker";
            type: "publicKey";
          }
        ];
      };
    },
    {
      name: "registry";
      docs: ["* Registry"];
      type: {
        kind: "struct";
        fields: [
          {
            name: "isLocked";
            type: "bool";
          },
          {
            name: "nodeCount";
            type: "u64";
          },
          {
            name: "snapshotCount";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "rotator";
      docs: ["* Rotator"];
      type: {
        kind: "struct";
        fields: [
          {
            name: "lastSlot";
            type: "u64";
          },
          {
            name: "nonce";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "snapshotEntry";
      docs: ["* SnapshotEntry"];
      type: {
        kind: "struct";
        fields: [
          {
            name: "id";
            type: "u64";
          },
          {
            name: "snapshot";
            type: "publicKey";
          },
          {
            name: "stakeAmount";
            type: "u64";
          },
          {
            name: "stakeOffset";
            type: "u64";
          },
          {
            name: "worker";
            type: "publicKey";
          }
        ];
      };
    },
    {
      name: "snapshot";
      docs: ["* Snapshot"];
      type: {
        kind: "struct";
        fields: [
          {
            name: "id";
            type: "u64";
          },
          {
            name: "nodeCount";
            type: "u64";
          },
          {
            name: "stakeTotal";
            type: "u64";
          },
          {
            name: "status";
            type: {
              defined: "SnapshotStatus";
            };
          }
        ];
      };
    }
  ];
  types: [
    {
      name: "ConfigSettings";
      docs: ["* ConfigSettings"];
      type: {
        kind: "struct";
        fields: [
          {
            name: "admin";
            type: "publicKey";
          },
          {
            name: "mint";
            type: "publicKey";
          },
          {
            name: "slotsPerRotation";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "SnapshotStatus";
      docs: ["* SnapshotStatus"];
      type: {
        kind: "enum";
        variants: [
          {
            name: "Archived";
          },
          {
            name: "Closing";
          },
          {
            name: "Current";
          },
          {
            name: "InProgress";
          }
        ];
      };
    }
  ];
  errors: [
    {
      code: 6000;
      name: "AccountAlreadyInitialized";
      msg: "This account has already been initialized";
    },
    {
      code: 6001;
      name: "AdminAuthorityInvalid";
      msg: "This instruction requires admin authority";
    },
    {
      code: 6002;
      name: "InvalidNode";
      msg: "The provided node is cannot be used for this operation";
    },
    {
      code: 6003;
      name: "InvalidSnapshotEntry";
      msg: "The provided snapshot entry cannot be used for this operation";
    },
    {
      code: 6004;
      name: "InvalidStakeAccount";
      msg: "The stake account cannot be used for this operation";
    },
    {
      code: 6005;
      name: "RegistryLocked";
      msg: "The registry is locked and may not be updated right now";
    },
    {
      code: 6006;
      name: "RegistryMustBeLocked";
      msg: "The registry must be locked for this operation";
    },
    {
      code: 6007;
      name: "SnapshotNotArchived";
      msg: "The snapshot is not archived";
    },
    {
      code: 6008;
      name: "SnapshotNotInProgress";
      msg: "The snapshot is not in progress";
    },
    {
      code: 6009;
      name: "SnapshotNotCurrent";
      msg: "The snapshot is not current";
    },
    {
      code: 6010;
      name: "SnapshotIncomplete";
      msg: "The snapshot is incomplete";
    }
  ];
};

export const IDL: ClockworkNetwork = {
  version: "1.0.3",
  name: "clockwork_network",
  instructions: [
    {
      name: "entryClose",
      accounts: [
        {
          name: "authority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "entry",
          isMut: true,
          isSigner: false,
        },
        {
          name: "snapshot",
          isMut: true,
          isSigner: false,
        },
        {
          name: "snapshotQueue",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
      returns: {
        defined: "CrankResponse",
      },
    },
    {
      name: "entryCreate",
      accounts: [
        {
          name: "authority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "config",
          isMut: false,
          isSigner: false,
        },
        {
          name: "entry",
          isMut: true,
          isSigner: false,
        },
        {
          name: "node",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "registry",
          isMut: false,
          isSigner: false,
        },
        {
          name: "snapshot",
          isMut: true,
          isSigner: false,
        },
        {
          name: "snapshotQueue",
          isMut: false,
          isSigner: true,
        },
        {
          name: "stake",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
      returns: {
        defined: "CrankResponse",
      },
    },
    {
      name: "initialize",
      accounts: [
        {
          name: "admin",
          isMut: true,
          isSigner: true,
        },
        {
          name: "authority",
          isMut: true,
          isSigner: false,
        },
        {
          name: "clockworkProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "config",
          isMut: true,
          isSigner: false,
        },
        {
          name: "rotator",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "registry",
          isMut: true,
          isSigner: false,
        },
        {
          name: "snapshot",
          isMut: true,
          isSigner: false,
        },
        {
          name: "snapshotQueue",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "rotatorTurn",
      accounts: [
        {
          name: "config",
          isMut: false,
          isSigner: false,
        },
        {
          name: "entry",
          isMut: false,
          isSigner: false,
        },
        {
          name: "pool",
          isMut: true,
          isSigner: false,
        },
        {
          name: "poolConfig",
          isMut: false,
          isSigner: false,
        },
        {
          name: "poolProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rotator",
          isMut: true,
          isSigner: false,
        },
        {
          name: "signer",
          isMut: false,
          isSigner: true,
        },
        {
          name: "snapshot",
          isMut: false,
          isSigner: false,
        },
        {
          name: "worker",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "nodeRegister",
      accounts: [
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "config",
          isMut: false,
          isSigner: false,
        },
        {
          name: "entry",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "node",
          isMut: true,
          isSigner: false,
        },
        {
          name: "registry",
          isMut: true,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
        {
          name: "signer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "snapshot",
          isMut: true,
          isSigner: false,
        },
        {
          name: "stake",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "worker",
          isMut: false,
          isSigner: true,
        },
      ],
      args: [],
    },
    {
      name: "nodeStake",
      accounts: [
        {
          name: "config",
          isMut: false,
          isSigner: false,
        },
        {
          name: "node",
          isMut: false,
          isSigner: false,
        },
        {
          name: "nodeStake",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "signer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokens",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "snapshotClose",
      accounts: [
        {
          name: "authority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "snapshot",
          isMut: true,
          isSigner: false,
        },
        {
          name: "snapshotQueue",
          isMut: false,
          isSigner: true,
        },
      ],
      args: [],
      returns: {
        defined: "CrankResponse",
      },
    },
    {
      name: "snapshotCreate",
      accounts: [
        {
          name: "authority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "config",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "registry",
          isMut: true,
          isSigner: false,
        },
        {
          name: "snapshot",
          isMut: true,
          isSigner: false,
        },
        {
          name: "snapshotQueue",
          isMut: false,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
      returns: {
        defined: "CrankResponse",
      },
    },
    {
      name: "snapshotKickoff",
      accounts: [
        {
          name: "authority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "registry",
          isMut: true,
          isSigner: false,
        },
        {
          name: "snapshotQueue",
          isMut: false,
          isSigner: true,
        },
      ],
      args: [],
      returns: {
        defined: "CrankResponse",
      },
    },
    {
      name: "snapshotPause",
      accounts: [
        {
          name: "admin",
          isMut: true,
          isSigner: true,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "clockworkProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "config",
          isMut: false,
          isSigner: false,
        },
        {
          name: "snapshotQueue",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "snapshotResume",
      accounts: [
        {
          name: "admin",
          isMut: true,
          isSigner: true,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "clockworkProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "config",
          isMut: false,
          isSigner: false,
        },
        {
          name: "snapshotQueue",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: "snapshotRotate",
      accounts: [
        {
          name: "authority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "config",
          isMut: false,
          isSigner: false,
        },
        {
          name: "currentSnapshot",
          isMut: true,
          isSigner: false,
        },
        {
          name: "nextSnapshot",
          isMut: true,
          isSigner: false,
        },
        {
          name: "registry",
          isMut: true,
          isSigner: false,
        },
        {
          name: "snapshotQueue",
          isMut: false,
          isSigner: true,
        },
      ],
      args: [],
      returns: {
        defined: "CrankResponse",
      },
    },
  ],
  accounts: [
    {
      name: "authority",
      docs: ["* Authority"],
      type: {
        kind: "struct",
        fields: [],
      },
    },
    {
      name: "config",
      docs: ["* Config"],
      type: {
        kind: "struct",
        fields: [
          {
            name: "admin",
            type: "publicKey",
          },
          {
            name: "mint",
            type: "publicKey",
          },
          {
            name: "slotsPerRotation",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "node",
      docs: ["* Node"],
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            type: "publicKey",
          },
          {
            name: "id",
            type: "u64",
          },
          {
            name: "stake",
            type: "publicKey",
          },
          {
            name: "worker",
            type: "publicKey",
          },
        ],
      },
    },
    {
      name: "registry",
      docs: ["* Registry"],
      type: {
        kind: "struct",
        fields: [
          {
            name: "isLocked",
            type: "bool",
          },
          {
            name: "nodeCount",
            type: "u64",
          },
          {
            name: "snapshotCount",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "rotator",
      docs: ["* Rotator"],
      type: {
        kind: "struct",
        fields: [
          {
            name: "lastSlot",
            type: "u64",
          },
          {
            name: "nonce",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "snapshotEntry",
      docs: ["* SnapshotEntry"],
      type: {
        kind: "struct",
        fields: [
          {
            name: "id",
            type: "u64",
          },
          {
            name: "snapshot",
            type: "publicKey",
          },
          {
            name: "stakeAmount",
            type: "u64",
          },
          {
            name: "stakeOffset",
            type: "u64",
          },
          {
            name: "worker",
            type: "publicKey",
          },
        ],
      },
    },
    {
      name: "snapshot",
      docs: ["* Snapshot"],
      type: {
        kind: "struct",
        fields: [
          {
            name: "id",
            type: "u64",
          },
          {
            name: "nodeCount",
            type: "u64",
          },
          {
            name: "stakeTotal",
            type: "u64",
          },
          {
            name: "status",
            type: {
              defined: "SnapshotStatus",
            },
          },
        ],
      },
    },
  ],
  types: [
    {
      name: "ConfigSettings",
      docs: ["* ConfigSettings"],
      type: {
        kind: "struct",
        fields: [
          {
            name: "admin",
            type: "publicKey",
          },
          {
            name: "mint",
            type: "publicKey",
          },
          {
            name: "slotsPerRotation",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "SnapshotStatus",
      docs: ["* SnapshotStatus"],
      type: {
        kind: "enum",
        variants: [
          {
            name: "Archived",
          },
          {
            name: "Closing",
          },
          {
            name: "Current",
          },
          {
            name: "InProgress",
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: "AccountAlreadyInitialized",
      msg: "This account has already been initialized",
    },
    {
      code: 6001,
      name: "AdminAuthorityInvalid",
      msg: "This instruction requires admin authority",
    },
    {
      code: 6002,
      name: "InvalidNode",
      msg: "The provided node is cannot be used for this operation",
    },
    {
      code: 6003,
      name: "InvalidSnapshotEntry",
      msg: "The provided snapshot entry cannot be used for this operation",
    },
    {
      code: 6004,
      name: "InvalidStakeAccount",
      msg: "The stake account cannot be used for this operation",
    },
    {
      code: 6005,
      name: "RegistryLocked",
      msg: "The registry is locked and may not be updated right now",
    },
    {
      code: 6006,
      name: "RegistryMustBeLocked",
      msg: "The registry must be locked for this operation",
    },
    {
      code: 6007,
      name: "SnapshotNotArchived",
      msg: "The snapshot is not archived",
    },
    {
      code: 6008,
      name: "SnapshotNotInProgress",
      msg: "The snapshot is not in progress",
    },
    {
      code: 6009,
      name: "SnapshotNotCurrent",
      msg: "The snapshot is not current",
    },
    {
      code: 6010,
      name: "SnapshotIncomplete",
      msg: "The snapshot is incomplete",
    },
  ],
};
