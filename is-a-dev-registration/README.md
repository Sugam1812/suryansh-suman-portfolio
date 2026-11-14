# Free .is-a.dev Domain Registration Guide for Suryansh Suman

To get a free custom domain like **`suryansh-suman.is-a.dev`** or **`suryanshsuman.is-a.dev`**, follow these simple steps using the `is-a-dev/register` project.

---

## 1. Domain Options & Pre-generated Files

The following configuration files are ready to submit:
- **`domains/suryansh-suman.json`** ➔ Provides domain: `https://suryansh-suman.is-a.dev`
- **`domains/suryanshsuman.json`** ➔ Provides domain: `https://suryanshsuman.is-a.dev`

Content of the file:
```json
{
  "owner": {
    "username": "Sugam1812",
    "email": "sugam1812@gmail.com"
  },
  "records": {
    "CNAME": "sugam1812.github.io"
  }
}
```

*(Note regarding `suryansh.suman.is-a.dev`: On `is-a.dev`, registering a nested domain `x.y.is-a.dev` requires ownership of `y.is-a.dev`. Since `suman.is-a.dev` is already registered by a different user `thatsuman`, using `suryansh-suman.is-a.dev` or `suryanshsuman.is-a.dev` is the cleanest and immediately approved option!)*

---

## 2. Step-by-Step Instructions to Submit

1. Open **[https://github.com/is-a-dev/register](https://github.com/is-a-dev/register)** in your browser while logged into GitHub (`Sugam1812`).
2. Click the **Fork** button (top right) to create a fork in your GitHub account.
3. In your forked repository, navigate into the **`domains`** folder.
4. Click **Add file** ➔ **Create new file**.
5. Name the file: `suryansh-suman.json`
6. Paste the JSON contents:
   ```json
   {
     "owner": {
       "username": "Sugam1812",
       "email": "sugam1812@gmail.com"
     },
     "records": {
       "CNAME": "sugam1812.github.io"
     }
   }
   ```
7. Click **Commit changes...**.
8. Click **Contribute** ➔ **Open pull request**.
9. The automated `is-a-dev` GitHub Action CI will run continuous tests and verify the schema in ~30 seconds.
10. Once merged by the maintainers, your domain `suryansh-suman.is-a.dev` is live!
