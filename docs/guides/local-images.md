# Local images database

**1. Prepare a directory for the image database**

The requirements for the directory are:

- files from that directory should be able to served by an HTTP server, e.g. nginx,
- if write access is required (for uploading new portion size images using the admin tool) the directory must be writable by the `intake24-api-server` process (i.e. `intake24-api-server` user by default)

**2. Extract a snapshot of the image database to the image directory**

**3. Set up an HTTP server to serve static files from that directory**

Make sure that:

- the URLs don't clash with the rest of Intake24 URLs. Use either a special prefix (e.g., `/images`) or a different port.

- the base protocol (`http` or `https`) is the same as the protocol used by the survey website.

The most basic `nginx` configuration (simply added to the API server's nginx configuration) is as follows:

```
    location /images/ {
      alias /var/run/intake24-images/;
    }
```

**4. In the API server's `application.conf`, add the following section:**

```
intake24 {

  ...

  images {

  ...

    localStorage {
      baseDirectory = "(path to directory in the local filesystem)"
      urlPrefix = "(external URL that should be used to access the images)"
    }
  }
}
```

e.g.

```
    localStorage {
      baseDirectory = "/var/run/intake24-images"
      urlPrefix = "http://192.168.56.2/images"
    }
```

**5. In the API server's `application.conf`, replace the line**

`play.modules.enabled += "modules.S3StorageReadOnlyModule"`

(or `play.modules.enabled += "modules.S3StorageModule"` depending on the configuration)

with

`play.modules.enabled += "modules.LocalStorageModule"`

**6. (Optional) delete the `intake24.images.S3Storage` block from the API server's `application.conf`**
