import moment from 'moment';

function startInterval() {
  setInterval(() => {
    this.currentTime = moment().format('HH:mm:ss');
  }, 1000);
}

async function saveTime() {
  const time = this.currentTime;
  const res = await fetch('http://localhost:5555/times', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ time }),
  });
  const json = await res.json();
  if (json.insertId) {
    this.savedTimes.unshift({ id: json.insertId, time });
    this.$toast.success(`Timestamp ${time} was saved`, {
      position: 'top-right',
    });
  }
}

async function deleteTime(id) {
  const res = await fetch(`http://localhost:5555/time/${id}`, {
    method: 'DELETE',
  });
  const json = await res.json();
  if (json.affectedRows) {
    this.savedTimes = this.savedTimes.filter(savedTime => savedTime.id !== id);
    this.$toast.error(`Timestamp with ID ${id} was deleted`, {
      position: 'top-right',
    });
  }
}

export { startInterval, saveTime, deleteTime };
