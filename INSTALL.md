# Install on GitHub Pages

This template is already configured for:

- Repository: `saiferlab-cyber/saiferlab-cyber.github.io`
- Website: <https://saiferlab-cyber.github.io/>
- CMS: <https://saiferlab-cyber.github.io/admin/>

## 1. Copy the template

Copy every file and directory in this package to the root of the repository.
You can keep the existing Git history. The included `README.md` may replace the
current placeholder README.

## 2. Review the sample content

Before publishing, edit:

- `_data/site.yml` for the lab name, description, email, and links;
- `_data/research.yml` for the macroareas;
- `about.md` for the About Us page;
- `rules.md` for the group rules;
- `_theses/` for thesis topics.

The email `contact@example.org` is a placeholder and must be replaced.
The sample thesis entries are marked with `Example:` in their title and should
be edited or deleted before the website is announced publicly.

## 3. Commit and push

```bash
git add .
git commit -m "Install sAIfer Lab website and Sveltia CMS"
git push origin main
```

In GitHub, open **Settings → Pages** and select:

- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/(root)**

## 4. Open the CMS

Visit <https://saiferlab-cyber.github.io/admin/> and choose **Sign in with
Token**.

1. In the Sveltia dialog, use the link for creating a new GitHub token. The
   template requests only the `public_repo` scope because the website
   repository is public.
2. On GitHub, give the token a recognizable name such as
   `Sveltia CMS - sAIfer Lab` and choose a short expiration period, for example
   30 or 90 days.
3. Confirm that `public_repo` is selected, then generate the token.
4. Copy the token immediately. GitHub shows it only once.
5. Return to Sveltia, paste the token into the dialog, and sign in.

The GitHub account creating the token must already have write access to
`saiferlab-cyber/saiferlab-cyber.github.io`. Never place the token in
`config.yml`, a commit, an issue, or a shared message. If the organization uses
SAML SSO, authorize the token for the organization after creating it.

To revoke an old token, open GitHub **Settings → Developer settings → Personal
access tokens → Tokens (classic)** and delete it.

## Optional local preview

If Ruby and Bundler are installed:

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000/>.
