import WorkOrderCard from "@core/components/organisms/workOrderCard/WorkOrderCard";
import { SimpleGrid } from "@mantine/core";

interface WorkOrder {
  id: string;
  itemName: string;
  workName: string;
  quantity: string;
  equipment: string;
  dueDate: string;
  status: string;
  image: string;
}

interface WorkOrderGridProps {
  filteredWorkOrders: WorkOrder[];
  resetFilters: () => void;
}

export default function WorkOrderGrid({
  filteredWorkOrders,
}: WorkOrderGridProps) {
  console.log(filteredWorkOrders, "filteredWorkOrders");
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2 }}
      spacing="md"
      style={{ maxWidth: "100%" }}
    >
      {filteredWorkOrders.map((order) => (
        <WorkOrderCard key={order.id} {...order} />
      ))}
    </SimpleGrid>
  );
}
