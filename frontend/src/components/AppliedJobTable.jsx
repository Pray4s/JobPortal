import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

const AppliedJobTable = () => {
  return (
    <div>
        <Table>
            <TableCaption>List of Applied Jobs</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Data</TableHead>
                    <TableHead>Job Role</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead className = "text-right">Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    [1,2].map((item,index) => (
                        <TableRow key={index}>
                            <TableCell>01-11-2024</TableCell>
                            <TableCell>Frontend Developer</TableCell>
                            <TableCell>Google</TableCell>
                            <TableCell className="text-right"><Badge>Selected</Badge></TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </div>
  )
}

export default AppliedJobTable