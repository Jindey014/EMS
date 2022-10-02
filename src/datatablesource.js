
export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'user', headerName: "Users", width: 230, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} />
                    {params.row.username}
                </div>
            )
        }
    },
    { field: "email", headerName: "Email", width: 230 },
    { field: "address", headerName: "Address", width: 150 },
    {
        field: "country", headerName: "Country", width: 150
    },
]




