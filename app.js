console.log('Hello World');
[
  {
    "operation": "shift",
    "spec": {
      "date": "date",
      "resourcePermissions": {
        "type": "resourcePermissions.type",
        "header": {
          ":authority": "resourcePermissions.header.authority",
          ":path": "resourcePermissions.header.path",
          ":method": "resourcePermissions.header.method",
          "cache-control": "resourcePermissions.header.cache_control",
          "x-resuest-id": "resourcePermissions.header.x_request_id"
        }
      }
    }
  },
  {
    "operation": "modify-overwrite-beta",
    "spec": {
      "*": "=replaceAll",
      "*": {
        ":": "",
        "-": "_"
      }
    }
  },
  {
    "operation": "remove",
    "spec": {
      "resourcePermissions": {
        ":": "",
        "-": ""
      }
    }
  }
]
