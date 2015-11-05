# 全apサーバー
on_app_servers() {
  # stop old ws and delete old app dir
  run "cd #{config.release_path}/node; npm install socket.io"
  run "pm2 delete ws"
  # copy new app dir and start ws
  run "pm2 start app.js --name 'ws'"
}
