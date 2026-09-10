# sAIfer Lab Cybersecurity Website

A custom Jekyll and Sveltia CMS template for the sAIfer Lab Cybersecurity and
Artificial Intelligence Research Group.

The public website provides About Us, Team, Thesis, and Rules pages. Researchers
can manage site settings, macroareas, page content, team members, and thesis
topics through Sveltia CMS at `/admin/`.

Content that changes frequently lives in straightforward YAML files:

- `_data/team.yml` contains professors, researchers, and PhD students, including
  optional photos and LinkedIn, GitHub, and ORCID profiles.
- `_data/theses.yml` contains every thesis topic, abstract, supervisor, tutor, and related link.
- `_data/research.yml` contains the macroareas used by thesis topics. A thesis
  `macroarea` value should match the relevant macroarea `id`.

See [INSTALL.md](INSTALL.md) for deployment instructions.
