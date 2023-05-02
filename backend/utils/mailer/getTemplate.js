const fs = require('fs');
const path = require('path');

const getTemplate = (templateName, data) => {
    const templatePath = path.join(__dirname, '..', '..', 'email_templates', templateName);
    let templateContent = fs.readFileSync(templatePath, 'utf-8');

    for (const key in data) {
        const placeholder = `{{${key}}}`;
        const value = data[key];
        templateContent = templateContent.replace(new RegExp(placeholder, 'g'), value);
    }

    return templateContent;
}

module.exports = getTemplate;