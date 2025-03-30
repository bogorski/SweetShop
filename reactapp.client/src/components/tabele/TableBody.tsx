import { TableBodyProps } from '../../types/tableBodyProps';

const TableBody: React.FC<TableBodyProps> = ({ data, columns, getSelectedClassName, handleRowClick, cellRenderer }) => {
    return (
        <tbody>
            {data.map((item, rowIndex) => (
                <tr key={rowIndex} className={getSelectedClassName(item.id)} onClick={() => handleRowClick(item.id)}>
                    <td>{rowIndex + 1}</td>
                    {columns.map((column, cellIndex) => (
                        <td key={cellIndex}>
                            {cellRenderer(item, column)}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};

export default TableBody;