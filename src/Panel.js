import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";

export default function Panel() {
  const data = [
    {
      category: "분류1",
      nodeId: "1",
      item: [
        { label: "지수1-1", nodeId: "111" },
        { label: "지수1-2", nodeId: "222" },
      ],
    },
    {
      category: "분류2",
      nodeId: "4",
      item: [
        { label: "지수2-1", nodeId: "333" },
        { label: "지수2-2", nodeId: "444" },
      ],
    },
  ];

  function onClick(p) {
    console.log(p);
  }

  return (
    <>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
      >
        {data.map((cur, index) => {
          return (
            <TreeItem nodeId={cur.nodeId} label={cur.category}>
              {cur.item.map((p) => {
                return (
                  <TreeItem
                    nodeId={p.nodeId}
                    label={p.label}
                    onClick={() => onClick(p.nodeId)}
                  ></TreeItem>
                );
              })}
            </TreeItem>
          );
        })}
      </TreeView>
    </>
  );
}
