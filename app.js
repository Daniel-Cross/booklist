function Song(title, artist, album) {
  this.title = title;
  this.artist = artist;
  this.album = album;
}

function UI() {}

UI.prototype.addSongToList = function(song) {
  const list = document.getElementById('song-list');

  const row = document.createElement('tr');

  row.innerHTML = `<td>${song.title}</td><td>${song.artist}</td><td>${
    song.album
  }</td><td><a href="#" class="delete">X</td>`;

  list.appendChild(row);
};

UI.prototype.deleteSong = function(target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
};

UI.prototype.clearFields = function() {
  document.getElementById('title').value = '';
  document.getElementById('artist').value = '';
  document.getElementById('album').value = '';
};

document.getElementById('song-form').addEventListener('submit', function(e) {
  const title = document.getElementById('title').value,
    artist = document.getElementById('artist').value,
    album = document.getElementById('album').value;

  const song = new Song(title, artist, album);

  const ui = new UI();

  if (title === '' || artist === '' || album === '') {
    ui.showAlert('Please enter data in the input fields', 'error');
  } else {
    ui.addSongToList(song);

    ui.clearFields();
  }

  e.preventDefault();
});

document.getElementById('song-list').addEventListener('click', function(e) {
  const ui = new UI();

  ui.deleteSong(e.target);

  e.preventDefault();
});
