export = {
  components: {
    schemas: {
      id: {
        type: 'string',
        description: 'An id of any entity',
        example: '63ee753cc451ec1551e64d94',
      },
      exampleUserSchema: {
        type: 'object',
        properties: {
          email: {
            type: 'string',
            description: 'User email address',
            example: 'example@email.com',
          },
          password: {
            type: 'string',
            description: 'User password',
            minimum: 6,
            example: 'very-strong-password',
          },
          name: {
            type: 'string',
            description: 'User full name',
            example: 'John Doe',
          },
          avatar: {
            type: 'string',
            description: 'User avatar url',
            example: 'https://<bucket-name>/<user-id>/avatar.png',
          },
          mobile: {
            type: 'string',
            description: 'User mobile number',
            example: '+8801700000000',
          },
          dob: {
            type: 'string',
            description: 'User date of birth',
            example: '1970-02-16',
          },
          organization: {
            type: 'string',
            description: 'User organization',
            example: 'Evil Corp.',
          },
        },
      },
      /**
       * * Response schemas
       */
      successResponse: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'identity of that schema',
            example: '64318d17439b2f6f2d7358b9',
          },
          created_at: {
            type: 'string',
            description: 'Application creation time',
            example: '2023-04-08T15:49:43.694Z',
          },
          updated_at: {
            type: 'string',
            description: 'Application update time',
            example: '2023-04-08T15:49:43.694Z',
          },
        },
      },
      error: {
        type: 'object',
        properties: {
          success: {
            type: 'boolean',
            example: false,
          },
          message: {
            type: 'string',
            example: 'Error message for the relevant error',
          },
          result: {
            type: 'object',
          },
        },
      },
    },
    securitySchemes: {
      accessToken: {
        type: 'http',
        in: 'header',
        name: 'AccessToken',
        description:
          'Access Bearer token to access all endpoints requiring access_token. [/users*, /revoke-at]',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      refreshToken: {
        type: 'http',
        in: 'header',
        name: 'RefreshToken',
        description:
          'Refresh Bearer token to access all endpoints requiring refresh_token. [/refresh, /revoke-rt, /sign-out]',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
    responses: {
      /**
       * * Success response template
       */
      SuccessResponse: {
        description: 'Success response description',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: {
                  type: 'boolean',
                  example: true,
                },
                message: {
                  type: 'string',
                  example: 'Application created',
                },
                result: {
                  type: 'object',
                  $ref: '#/components/schemas/successResponse',
                },
              },
            },
          },
        },
      },
      /**
       * * Error response templates
       */
      BadRequest: {
        description: 'Bad Request',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              $ref: '#/components/schemas/error',
            },
          },
        },
      },
      Conflict: {
        description: 'Conflict',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              $ref: '#/components/schemas/error',
            },
          },
        },
      },
      Forbidden: {
        description: 'Forbidden',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              $ref: '#/components/schemas/error',
            },
          },
        },
      },
      InternalServerError: {
        description: 'Internal Server Error',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              $ref: '#/components/schemas/error',
            },
          },
        },
      },
      MethodNotAllowed: {
        description: 'Method Not Allowed',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              $ref: '#/components/schemas/error',
            },
          },
        },
      },
      NonAuthoritative: {
        description: 'NonAuthoritative',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              $ref: '#/components/schemas/error',
            },
          },
        },
      },
      NotFound: {
        description: 'Not Found',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              $ref: '#/components/schemas/error',
            },
          },
        },
      },
      Unauthorized: {
        description: 'Unauthorized',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              $ref: '#/components/schemas/error',
            },
          },
        },
      },
    },
  },
};
