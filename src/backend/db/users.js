import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    profileImg:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAABxCAMAAABIgXcvAAABIFBMVEUBAQEAAAAAr/EAs/QFAAAAtvcAtfgAuPgJAAAAuf0RgtgAAA8AsvUAAAkAAAQFABoAABwMtv4AABMKABIAABgKABgDACUBADAGADUJADgWAEcVAEQGADIBACkIAFoWIXYUQoobWJkGcLcNeNAPesMJc6cQEGQHFkIUO5kTZLYalt8DpusTMIcVKnsTbMELm+EKZp4SHX0QeckNCWoRSYwTACkZK2wSjNgTElMWV6kWADEcO10MjcsGO3kYe7YUQ3sTme0RTXQQUG0TVYoPFikNJVkQLEMLMVoJAD4NW6YMGGUQmM4TIT4AYIcMX44RRnYOJzALgqgNICARFTUDQ1sXcZIURZoUZ+oNdt0QSMQMhLgZV9gRFU0XNqQULI8YNoAljs5wAAAF3ElEQVR4nO2be1caORTA584MA0iQl2ClUMGiKEFBVqEWRFFUFMXu2tqtsu33/xY7Po6SZGbglAvEnrlzjn9IuJObX3IfSVBAGfHBbYavT/lzxGUin7hM5BOXiXziMpFPXCbyictEPnGZyCcuE/nEZSKfuExGHagXmfSbJskEQNcTi++Wksn3S6m0rsOY+mbEBKJx34flTHbl49yD5FazmbVUcH6CbCbEJJHKr28UqEoM7VEMg1Ba2CimFuG39M2ISTSU3NwqebxEZYV4vYXyWmJCXPCZBMKd7Qolmmolmkq3/krDW2ASDKY3K6rH0ownW7x0ay08ASzYTMLJMnWw43GSkdLOruxMIF2tDbHjkUtk5VMU/d2YTAKhIrVeH4IthXxAXiYAu3vqaIaYptCMD5cKIpPA5z1rj0WIxzCEf6r1mKRMILbBBxAzIPr9ftpoZPablDeG0APUyILHJF5ku0qMyGGzddQ6vg61zZyr3mqagZ6lkg9KyCS4sM4OudHI+gYy4Yc/8WyJMZbQE0QoWEzgfYkZcCOXEL+in66yjWqhoXpH7yGOJcEOG0f8Gz4rHQBnjCn+XhzNEiQJZNmpletYq4bdOca9lapoXcBhAmtMRDQ+Vu0aJnMaa3JsiOYpM4nveQe7VzrP22iGWIUNOQbaosdhckEHXVL3EuybX7G+WmuEJWIC4b3BdUyrDhEPelyApAdRlE6gMAkuFQamDKl07BuDXuASGiPn6ImnyyRQZDzwtRMSPcIaYkb6VAClFxhMAisDlpBC3kkL1Pgk05+Rhgl8GFzvWi3m1FZv8lmx0YR5lG6Mz0TfGbRE7X5x1HMsJMw0KQkTCKwyw9w9ddIKiRJvipndI3QDgQmk2ASE1p31NPlCX+vpkjDpHDKWkCNHraIlxgrKphECkzzrWI1jRz3xhrBQahYFwEyY5P2sJatORS20qSpYsigJkxPWEq3gkHWZbvhvYXNCvZGDSXCftUSN2CXCT0P3j8ZPL7UtB5Ng0cv2S2voTnqgx1sSacvBRK9zTFSSdVwp6QafDkvCBM54S7SC7phKtbksUhYmkBf2tL1lh51Sc35RZn5p9EYSJv2SsIdKWrb+y0Syw3svSXwXvDsULNEOg3aqzbyem41aISEJk8U5cV/b37Nnwh9MaLWoJEygLMY60rBbKeDj619SRtnpHp+JAgeCIapaurTTcyXkXa3fey06EwWqQiplxohrOyZnfCWPtM+NwSQlFE/mQF/ZNG7zuTBxTgmmyUTRV8RTUmKWT5Yjd8oD9GeRdt0QmMAvfsKY0W7HprGvyzGJOEST6e9BCrGRdK2QPBw7xDhLjOa8RExEP+w957/wJL6zAofE0XNNfa8eOsLk510XwGnrqtekfmG9owR4Be385JyrUcTJ//XhipQhODn/jlznJwBszeGpBXgmQn311LCLdpKNw0SBa2Z+RY6FXLhsaYladyz6Z3GKPbjoNbXIT36AOzE5Mx1DD+9yARYTWHrJ7c1YEhA8l96iIhTPnU+6U2x4zSNJYdPyBPtSMMVT64z/2pcHTUC/evRf3sqJ5YwBqHMXjYhxJue9FfB908yuVtJ2TcObXP3+FeO1+EzMQQndUu/3ZduyN9HfGyTiPdJxX4/G5KEO/vf7dsLuw/TNfOw1VfHQoyH+d5ZMTjd+LC/aHn9CupN5db+NPva1YTwmcLNe/ex0YQv2I89ICP1m5d4kYQLK8qeQ4zjD6nNyZtB9sK7DxusA1uDMR4dczc7nH6tkg97pvpHWyIyYKEOUmZPr54FKPCRX1ydysx6PyZBmAPn720apnH/e/ZaZybAx03/c76cm9+ugqTFRINC/v02M0lB2JkoQqv/139xvgqyfxM/t4Jv6TZD9sIV+oRz6WCufJhNQLi4w9c2OiQKxE8cj7rF0T5OJ+fHCSfvNx5PnketfTGipTJmJAgvtxJ/BRJlYkJ86k0npm8zwzERcJvKJy0Q+cZnIJy4T+cRlIp+4TOSTP4bJ/05jh/Z69JidAAAAAElFTkSuQmCC",
    username: "adarshbalika",
    password: "adarshBalika123",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "test",
    lastName: "user",
    profileImg:
      "data:image/jpeg;base64,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",
    username: "test",
    password: "123",
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
