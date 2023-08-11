import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const Page = () => {
    const [yamlEditorCode, setYamlEditorCode] = useState('  - yaml yaml yaml');


    const options = {
        autoIndent: 'advanced',
    };

    return (
        <div>
            this is a Page
            <Editor
                height="80vh"
                theme="vs-dark"
                language="yaml"
                options={options}
                onChange={e => setYamlEditorCode(e)}
                value={yamlEditorCode}
            />
        </div>
    );
}

export default Page;
