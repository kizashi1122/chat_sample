# 全apサーバー
on_app_servers() {
  run "mkdir #{config.current_path}/node/config"
  run "ln -nfs #{config.shared_path}/config/default.json #{config.current_path}/node/config/default.json"

  # stop old ws and delete old app dir
  run "cd #{config.release_path}/node; npm install socket.io socket.io-redis redis config"
  run "pm2 delete ws"
  # copy new app dir and start ws
  run "cd #{config.release_path}/node; pm2 start app.js --name 'ws'"
}
