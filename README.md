# ajv-cli-custom

Inform `ajv-cli` of your custom keywords and format names via a JSON file.

## Usage

Install this package

```bash
npm install -g ajv-cli-custom
```

Then create a file named `customs.json` in the same directory you wish to run the `ajv` command. The JSON object should contain two properties (`keywords` and `formats`). Both accept an array of strings as values. Either are optional.

```json
{
    "keywords": ["keyword1", "keyword2"],
    "formats": ["format1", "format2"]
}
```

Finally, invoke `ajv` using the `-c` option to specify this module. For example:

```bash
ajv compile -s myschema.schema.json -c ajv-cli-custom
```
