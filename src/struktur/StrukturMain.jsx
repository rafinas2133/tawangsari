import React, { useEffect, useState } from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from 'styled-components';
import Guest from '../assets/structure_default.png';
import { fetchStructuresData } from "../api/structuresAPI";
import { Loading } from "../components/Loading";

const StyledNode = styled.div`
    padding: 5px;
    border-radius: 8px;
    display: inline-block;
    border: 1px solid #000;
    background-color: #021526;
    text-align: center;
    width: 160px;
    font-size: 12px;
`;

export const StrukturMain = () => {
    const [structures, setStructures] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await fetchStructuresData();
                setStructures(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const buildTree = (nodes, upperLevelId = null) => {
        if (!nodes || nodes.length === 0) return null;

        return nodes
            .filter(node => node.upper_level_uuid === upperLevelId)
            .map(node => (
                <TreeNode
                    key={node.uuid}
                    label={
                        <StyledNode>
                            <div className="bg-card text-white">
                                <img
                                    className="w-full h-32 object-cover rounded-lg mb-2"
                                    src={`https://tawangsari.com/api/${node.image_path}`}
                                    alt={node.name}
                                    onError={(e) => {
                                        e.target.src = Guest;
                                    }}
                                />
                                <div className="font-bold">{node.level}</div>
                                <div>{node.name}</div>
                                <div className="text-yellow-500">{node.nip}</div>
                            </div>
                        </StyledNode>
                    }
                >
                    {buildTree(nodes, node.uuid)}
                </TreeNode>
            ));
    };

    if (loading) {
        return <Loading/>;
    }

    if (error) {
        return <div>Error loading structures: {error.message}</div>;
    }

    const rootNodes = structures.filter(node => node.upper_level_uuid === null);

    return (
        <div className="bg-white pt-10 overflow-x-scroll">
            <div className="bg-card w-full text-white text-center py-4 mb-6">
                <h1 className="font-bold text-3xl mt-12 mb-4 md:text-5xl">STRUKTUR</h1>
            </div>
            <div className="w-full h-max p-2 px-4 md:px-2 bg-white items-center justify-center text-center">
                <div style={{ transform: 'scale(0.8)', transformOrigin: 'top center' }}>
                    {rootNodes.map(rootNode => (
                        <Tree
                            key={rootNode.uuid}
                            lineWidth={'1px'}
                            lineColor={'black'}
                            lineBorderRadius={'5px'}
                            label={
                                <StyledNode>
                                    <div className="text-white">
                                        <img
                                            className="w-full h-32 object-cover rounded-lg mb-2"
                                            src={`https://tawangsari.com/api/${rootNode.image_path}`}
                                            alt={rootNode.name}
                                            onError={(e) => {
                                                e.target.src = Guest;
                                            }}
                                        />
                                        <div className="font-bold">{rootNode.level}</div>
                                        <div>{rootNode.name}</div>
                                        <div className="text-yellow-500">{rootNode.nip}</div>
                                    </div>
                                </StyledNode>
                            }
                        >
                            {buildTree(structures, rootNode.uuid)}
                        </Tree>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StrukturMain;
