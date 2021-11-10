import React from 'react'
import TableHeader from '../components/tableheader'
import Table from '../components/table'

function TableContainer({tableData, tableHeader, isMyPlaylist}){
    return(
        <>
            <TableHeader header={tableHeader}/>
            <div className="track-table">
                <Table 
                    list={tableData}
                    isMyPlaylist={isMyPlaylist}
                />
            </div>
        </>
    )
}

export default TableContainer