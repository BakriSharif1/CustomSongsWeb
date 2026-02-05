import Card from "@/components/Card";

const orders = [
  {
    id: "ORD-1001",
    customer: "alex@example.com",
    status: "Writing",
    package: "Premium",
    createdAt: "Feb 1, 2026"
  },
  {
    id: "ORD-1002",
    customer: "taylor@example.com",
    status: "Recording",
    package: "Plus",
    createdAt: "Jan 18, 2026"
  }
];

export default function AdminPage() {
  return (
    <section className="section">
      <div className="mx-auto max-w-6xl">
        <h1 className="font-serif text-4xl text-rosewood md:text-5xl">Admin</h1>
        <p className="mt-4 text-base text-rosewood/70">
          Placeholder admin dashboard. Replace with real data and actions.
        </p>

        <div className="mt-10 grid gap-6">
          {orders.map((order) => (
            <Card key={order.id}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-rosewood">{order.id}</p>
                  <p className="text-xs text-rosewood/60">{order.customer}</p>
                </div>
                <span className="badge">{order.status}</span>
              </div>
              <div className="mt-4 text-sm text-rosewood/70">
                <p>Package: {order.package}</p>
                <p>Created: {order.createdAt}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <button className="btn btn-secondary" type="button">
                  Update status
                </button>
                <button className="btn btn-secondary" type="button">
                  Add internal note
                </button>
                <button className="btn btn-secondary" type="button">
                  Copy brief
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
