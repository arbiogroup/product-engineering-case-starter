import type { ReservationContext } from "../mockData";

type CreateCasePanelProps = {
  open: boolean;
  reservation: ReservationContext;
  onClose: () => void;
};

export function CreateCasePanel({ open, reservation, onClose }: CreateCasePanelProps) {
  if (!open) {
    return null;
  }

  return (
    <aside className="casePanel" aria-label="Create case panel">
      <div className="casePanelHeader">
        <div>
          <p className="eyebrow">Create case</p>
          <h2>Improve this flow</h2>
        </div>
        <button className="iconButton" type="button" onClick={onClose} aria-label="Close create case panel">
          ×
        </button>
      </div>

      <div className="placeholderBlock">
        <strong>Your task starts here.</strong>
        <p>
          Build the case creation interaction for {reservation.guestName}. Use the existing reservation context,
          prefill what should be prefilled, and show the loading and success states.
        </p>
      </div>

      <div className="todoList">
        <p className="todoTitle">Suggested first slice</p>
        <ul>
          <li>Title and description with useful defaults</li>
          <li>Case type and priority suggestion</li>
          <li>Clear loading state while actions are generated</li>
          <li>Success state after creation</li>
        </ul>
      </div>
    </aside>
  );
}
