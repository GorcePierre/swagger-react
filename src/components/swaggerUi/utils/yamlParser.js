import yaml from 'js-yaml'
import fs from'fs'
 
const yamlParserTool = (swaggerYaml) => {
    try {
        var doc = yaml.safeLoad(fs.readFileSync(swaggerYaml, 'utf8'));
        console.log(doc);
    } catch (e) {
        console.log(e);
    }
}
export {yamlParserTool}