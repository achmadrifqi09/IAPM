import React from "react";
import MaterialReactTable from "material-react-table";

const ITable = (props) => {
    const { datas, columns, action } = props;

    return (
        <>
            <MaterialReactTable
                columns={columns}
                data={datas}
                enableRowActions
                renderRowActionMenuItems={action}
                onHoveredColumnChange={false}
                enableColumnFilterModes={false}
                enableGlobalFilter={true}
                muiTablePaperProps={{
                    sx: {
                        boxShadow: "none",
                    },
                }}
            />
        </>
    );
};

export default ITable;
