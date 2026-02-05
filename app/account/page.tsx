import Card from "@/components/Card";

const orders = [
  {
    id: "ORD-1001",
    status: "Writing",
    package: "Premium",
    date: "Feb 1, 2026"
  },
  {
    id: "ORD-1002",
    status: "Recording",
    package: "Plus",
    date: "Jan 18, 2026"
  }
];

export default function AccountPage() {
  return (
    <section className="section">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-serif text-4xl text-rosewood md:text-5xl">Account</h1>
        <p className="mt-4 text-base text-rosewood/70">
          Placeholder customer portal with order status and downloads.
        </p>

        <div className="mt-10 grid gap-6">
          {orders.map((order) => (
            <Card key={order.id}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-rosewood">{order.id}</p>
                  <p className="text-xs text-rosewood/60">{order.date}</p>
                </div>
                <span className="badge">{order.status}</span>
              </div>
              <p className="mt-4 text-sm text-rosewood/70">
                Package: {order.package}
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <button className="btn btn-secondary" type="button">
                  Download placeholder
                </button>
                <button className="btn btn-secondary" type="button">
                  Message support
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
