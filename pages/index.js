import React, { useState } from 'react';

import dynamic from 'next/dynamic';
const Editor = dynamic(import('react-monaco-editor'), { ssr: false });

const Page = () => {
    const [yamlEditorCode, setYamlEditorCode] = useState('  - yaml yaml yaml');


    const options = {
        autoIndent: 'advanced',
    };

    return (
        <div>
            this is a Page
            <Editor
                editorDidMount={() => {
                    window.MonacoEnvironment.getWorkerUrl = (
                        _moduleId, label,
                    ) => {
                        if (label === 'yaml') {
                            return '_next/static/yaml.worker.js';
                        }
                        return '_next/static/editor.worker.js';
                    }
                }}
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
