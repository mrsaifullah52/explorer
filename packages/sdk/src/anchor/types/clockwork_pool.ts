export type ClockworkPool = {
  version: "1.0.3";
  name: "clockwork_pool";
  instructions: [
    {
      name: "rotate";
      accounts: [
        {
          name: "config";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rotator";
          isMut: false;
          isSigner: true;
        },
        {
          name: "pool";
          isMut: true;
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
      name: "initialize";
      accounts: [
        {
          name: "admin";
          isMut: true;
          isSigner: true;
        },
        {
          name: "config";
          isMut: true;
          isSigner: false;
        },
        {
          name: "pool";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "rotator";
          type: "publicKey";
        }
      ];
    }
  ];
  accounts: [
    {
      name: "initialize";
      type: {
        kind: "struct";
        fields: [
          {
            name: "admin";
            type: {
              defined: "Signer<'info>";
            };
          },
          {
            name: "config";
            type: {
              defined: "Account<'info,Config>";
            };
          },
          {
            name: "pool";
            type: {
              defined: "Account<'info,Pool>";
            };
          },
          {
            name: "systemProgram";
            type: {
              defined: "Program<'info,System>";
            };
          }
        ];
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
            name: "rotator";
            type: "publicKey";
          },
          {
            name: "poolSize";
            type: {
              defined: "usize";
            };
          }
        ];
      };
    },
    {
      name: "pool";
      docs: ["* Pool"];
      type: {
        kind: "struct";
        fields: [
          {
            name: "workers";
            type: {
              defined: "VecDeque<Pubkey>";
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
            name: "rotator";
            type: "publicKey";
          },
          {
            name: "poolSize";
            type: {
              defined: "usize";
            };
          }
        ];
      };
    }
  ];
  errors: [
    {
      code: 6000;
      name: "NotAuthorizedAdmin";
      msg: "This instruction requires admin authority";
    }
  ];
};

export const IDL: ClockworkPool = {
  version: "1.0.3",
  name: "clockwork_pool",
  instructions: [
    {
      name: "rotate",
      accounts: [
        {
          name: "config",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rotator",
          isMut: false,
          isSigner: true,
        },
        {
          name: "pool",
          isMut: true,
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
      name: "initialize",
      accounts: [
        {
          name: "admin",
          isMut: true,
          isSigner: true,
        },
        {
          name: "config",
          isMut: true,
          isSigner: false,
        },
        {
          name: "pool",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "rotator",
          type: "publicKey",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "initialize",
      type: {
        kind: "struct",
        fields: [
          {
            name: "admin",
            type: {
              defined: "Signer<'info>",
            },
          },
          {
            name: "config",
            type: {
              defined: "Account<'info,Config>",
            },
          },
          {
            name: "pool",
            type: {
              defined: "Account<'info,Pool>",
            },
          },
          {
            name: "systemProgram",
            type: {
              defined: "Program<'info,System>",
            },
          },
        ],
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
            name: "rotator",
            type: "publicKey",
          },
          {
            name: "poolSize",
            type: {
              defined: "usize",
            },
          },
        ],
      },
    },
    {
      name: "pool",
      docs: ["* Pool"],
      type: {
        kind: "struct",
        fields: [
          {
            name: "workers",
            type: {
              defined: "VecDeque<Pubkey>",
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
            name: "rotator",
            type: "publicKey",
          },
          {
            name: "poolSize",
            type: {
              defined: "usize",
            },
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: "NotAuthorizedAdmin",
      msg: "This instruction requires admin authority",
    },
  ],
};
