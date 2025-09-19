// packages/core/components/QueryBoundary.tsx
import React from "react";

export const QueryBoundary = ({
  isLoading,
  isError,
  error,
  refetch,
  skeleton,
  children,
}: {
  isLoading: boolean;
  isError: boolean;
  error: unknown;
  refetch?: () => void;
  skeleton?: React.ReactNode;
  children: React.ReactNode;
}) => {
  if (isLoading) {
    return (
      <>{skeleton ?? <div style={{ padding: "8px" }}>⏳ Loading...</div>}</>
    );
  }

  if (isError) {
    return (
      <div style={{ padding: "8px", color: "red" }}>
        ❌ Error: {(error as Error).message}
        {refetch && (
          <button
            style={{ marginLeft: "8px", cursor: "pointer" }}
            onClick={() => refetch()}
          >
            🔄 다시 시도
          </button>
        )}
      </div>
    );
  }

  return <>{children}</>;
};
