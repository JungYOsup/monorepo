import {
  WorkOrderCard,
  WorkOrderData,
} from "@core/components/organisms/WorkOrderCard";
import { SimpleGrid } from "@mantine/core";

interface WorkOrderGridProps {
  filteredWorkOrders: WorkOrderData[];
  resetFilters: () => void;
}

export default function WorkOrderGrid({
  filteredWorkOrders,
}: WorkOrderGridProps) {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2 }}
      spacing="md"
      style={{ maxWidth: "100%" }}
    >
      {filteredWorkOrders.map((order) => (
        <WorkOrderCard workOrder={order} key={order.id} />
      ))}
    </SimpleGrid>
  );
}
