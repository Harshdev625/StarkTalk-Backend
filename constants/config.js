const corsOptions = {
  origin: ["http://localhost:5173", process.env.CLIENT_URL],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const STARKTALK_TOKEN = "starktalk-token";

export { corsOptions, STARKTALK_TOKEN };
