const TableHead = ({ headers }) => {
    return (
        <thead>
            <tr className="header">
                <th>#</th>
                {headers.map((header, index) => (
                    <th key={index}>{header}</th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHead;