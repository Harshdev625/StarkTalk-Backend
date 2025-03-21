const corsOptions = {
  origin: ["http://localhost:5173", process.env.CLIENT_URL],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const STARKTALK_TOKEN = "Starktalk-token";

export { corsOptions, STARKTALK_TOKEN };
