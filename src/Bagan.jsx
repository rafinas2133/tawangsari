// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from 'styled-components';

const StyledNode = styled.div`
    padding: 10px;
    border-radius: 8px;
    display: inline-block;
    border: 1px solid #000;
    background-color: #f0f0f0;
    text-align: center;
    min-width: 100px;
`;

export const Bagan = () => {
    return (
        <div className="flex flex-col items-center bg-blue-200 min-h-screen p-8">
            <h1 className="text-4xl font-bold mb-8">STRUKTUR ORGANISASI</h1>
            <Tree
                lineWidth={'2px'}
                lineColor={'black'}
                lineBorderRadius={'10px'}
                label={<StyledNode>ketua</StyledNode>}
            >
                <TreeNode label={<StyledNode>wakil ketua</StyledNode>}>
                    <TreeNode label={<StyledNode>sekretaris umum</StyledNode>}>
                        <TreeNode label={<StyledNode>sekretaris I</StyledNode>}>
                            <TreeNode label={<StyledNode>biro kesekretariatan</StyledNode>} />
                        </TreeNode>
                    </TreeNode>
                    <TreeNode label={<StyledNode>bendahara umum</StyledNode>}>
                        <TreeNode label={<StyledNode>bendahara I</StyledNode>}>
                            <TreeNode label={<StyledNode>biro dana usaha</StyledNode>} />
                        </TreeNode>
                    </TreeNode>
                </TreeNode>
                <TreeNode label={<StyledNode>dept. KAMAS</StyledNode>} />
                <TreeNode label={<StyledNode>dept Pendidikan</StyledNode>} />
                <TreeNode label={<StyledNode>dept. Kominfo</StyledNode>} />
                <TreeNode label={<StyledNode>dept. Intel</StyledNode>} />
                <TreeNode label={<StyledNode>dept. Agama</StyledNode>} />
            </Tree>
        </div>
    );
};
