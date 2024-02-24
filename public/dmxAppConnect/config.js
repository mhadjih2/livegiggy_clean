dmx.config({
  "pagecontent": {
    "repeat1": {
      "meta": [
        {
          "type": "text",
          "name": "imagelink"
        },
        {
          "type": "number",
          "name": "imagecreator_id"
        }
      ],
      "outputType": "array"
    }
  },
  "passwordreset": {
    "query": [
      {
        "type": "text",
        "name": "email"
      },
      {
        "type": "text",
        "name": "id"
      }
    ]
  },
  "resetpassword2": {},
  "main": {
    "query": [
      {
        "type": "text",
        "name": "id"
      },
      {
        "type": "text",
        "name": "email"
      }
    ]
  }
});
