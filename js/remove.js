const respnose = {
   data: {
      success: true,
      code: 200,
      data: {
         _id: "607d4bbf0b192c32e8389f85",
         docs: {
            id_passport: {
               fileName: "bharat@wealthface.com_id_passport_1618831705437.pdf",
               aws_url:
                  "https://ifadocs.s3.eu-central-1.amazonaws.com/bharat@wealthface.com_id_passport_1618831705437.pdf",
               size_in_mb: 0.00883,
               extension: "pdf",
            },
         },
      },
      message: "",
   },
   status: 200,
   statusText: "OK",
   headers: {
      "cache-control": "no-cache, private",
      "content-type": "application/json",
   },
   config: {
      url: "https://esubs.wealthface.ca:6600/api/v1/displayDocs",
      method: "get",
      headers: {
         Accept: "application/json, text/plain, */*",
         Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZXN1YnMud2VhbHRoZmFjZS5jYTo2NjAwXC9hcGlcL3YxXC9sb2dpbiIsImlhdCI6MTYxODkxMzk2MiwiZXhwIjoxNjE4OTQ5OTYyLCJuYmYiOjE2MTg5MTM5NjIsImp0aSI6InZOaVpwQjczNm9lVWl1NFciLCJzdWIiOiI1ZjU3OWY4NzA0NDJlNzE3YjE3NGRiZjIiLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.yNQTIfNtc9H83C796dbvWP3vbl8Fu7eFQLg6OyupfkA",
      },
      transformRequest: [null],
      transformResponse: [null],
      timeout: 0,
      xsrfCookieName: "XSRF-TOKEN",
      xsrfHeaderName: "X-XSRF-TOKEN",
      maxContentLength: -1,
   },
   request: {},
};

const {
   data: {
      data: {
         docs: {
            id_passport: { fileName },
         },
      },
   },
} = respnose;

console.log(fileName);
